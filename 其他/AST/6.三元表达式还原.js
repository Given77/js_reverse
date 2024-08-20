const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const types = require('@babel/types');
const generator = require('@babel/generator').default;

jsCode = `
var d = true ? 1 : 2;
`;
let ast = parser.parse(jsCode);
let judge = {

    "BinaryExpression|UnaryExpression|ConditionalExpression"(path) {

        // 防止溢出
        if (path.isUnaryExpression({operator: "-"}) ||
            path.isUnaryExpression({operator: "void"})) {
            return;
        }
        const {confident, value} = path.evaluate();
        if (!confident)
            return;
        if (typeof value == 'number' && (!Number.isFinite(value))) {
            return;
        }
        path.replaceWith(types.valueToNode(value));
    },
};
traverse(ast, judge);

let {code} = generator(ast);
console.log(code);