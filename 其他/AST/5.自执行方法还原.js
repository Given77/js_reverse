const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const types = require('@babel/types');
const generator = require('@babel/generator').default;

jsCode = `
!(function () {
    console.log('123')
})
`
let ast = parser.parse(jsCode);
const judge = {
    UnaryExpression(path){
        let {argument} = path.node
        if(!types.isFunctionExpression(argument)){
            return;
        }
        let {id, params, body} = argument;
        if (id != null || params.length !== 0){
            return;
        }
        path.replaceWithMultiple(body.body);
    }
}
traverse(ast, judge);

let {code} = generator(ast);
console.log(code);
for (const i of process.argv){
    // process.argv[0]: Node.js 可执行文件的路径。
    // process.argv[1]: 正在执行的脚本文件的路径。
    // process.argv[2] 及后续元素: 传递给脚本的其他命令行参数。
    console.log(i)
}

