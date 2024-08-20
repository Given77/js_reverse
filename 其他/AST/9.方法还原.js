const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const types = require('@babel/types');
const generator = require('@babel/generator').default;

jscode = `
function xl (arg,arg1){
    return arg + arg1
}
var xx = xl('\u0068\u0065\u006c\u006c\u006f','\u002c\u0041\u0053\u0054') // --- > var xx = 'hello ast'
`;
let ast = parser.parse(jscode);
// 判断类型是是不是字面量
function isNodeLiteral(node) {
    if (Array.isArray(node)) {
        return node.every(ele => isNodeLiteral(ele));
    }
    if (types.isLiteral(node)) {
        if (node.value == null) {
            return false;
        }
        return true;
    }
    if (types.isBinaryExpression(node)) {
        return isNodeLiteral(node.left) && isNodeLiteral(node.right);
    }
    if (types.isUnaryExpression(node, {
        "operator": "-"
    }) || types.isUnaryExpression(node, {
        "operator": "+"
    })) {
        return isNodeLiteral(node.argument);
    }

    if (types.isObjectExpression(node)) {
        let {properties} = node;
        if (properties.length == 0) {
            return true;
        }

        return properties.every(property => isNodeLiteral(property));

    }
    if (types.isArrayExpression(node)) {
        let {elements} = node;
        if (elements.length == 0) {
            return true;
        }
        return elements.every(element => isNodeLiteral(element));
    }

    return false;
}

const CalcCallExpression = {
    FunctionDeclaration(path) {
        let {node, parentPath} = path;
        let {id, body} = node;
        let len = body.body.length;
        if (!types.isReturnStatement(body.body[len - 1])) {
            return;
        }
        // path.scope.getBinding 方法获取与该标识符相关联的绑定
        const binding = parentPath.scope.getBinding(id.name);
        // constant 属性表示标识符是否被认为是常量。如果标识符绑定在一个不可修改的值上（如字面量或函数声明），则该属性为 true
        if (!binding || !binding.constant)
            return;
        // binding.referenced 是一个属性，用于判断绑定对象是否在代码中被引用 引用true
        // parentPath.isProgram 方法来检查节点是否为顶级程序节点 顶级程序节点表示整个程序的根节点 最外层
        if (!binding.referenced && !parentPath.isProgram()) {
            path.remove();
            return;
        }
        // 定位到计算的方法
        let sourceCode = path.toString();
        if (sourceCode.includes("try") || sourceCode.includes("random") || sourceCode.includes("Date")) {
            //返回值不唯一不做处理
            return;
        }
        //直接eval，如果缺环境，让其主动报错，再补上即可。下同,函数声明eval不会报错。
        eval(sourceCode);
        try {
            let canRemoved = true;
            // binding.referencePaths 是 Babel AST 绑定对象的属性，用于获取与该绑定相关联的所有引用路径。
            for (const referPath of binding.referencePaths) {
                let {parentPath, node} = referPath;
                if (!parentPath.isCallExpression({"callee": node})) {
                    canRemoved = false;
                    continue;
                }
                let arguments = parentPath.node.arguments;
                if (arguments.length == 0 || !isNodeLiteral(arguments)) {
                    canRemoved = false;
                    continue;
                }

                let value = eval(parentPath.toString());

                if (typeof value == "function" || typeof value == "undefined") {
                    canRemoved = false;
                    continue;
                }

                console.log(parentPath.toString(), "-->", value);
                parentPath.replaceWith(types.valueToNode(value));
            }
            canRemoved && path.remove();
        } catch (e) {
        }
    },
}
traverse(ast, CalcCallExpression);

let {code} = generator(ast);
console.log(code);