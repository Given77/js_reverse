const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");
const generator = require("@babel/generator").default;

jscode = `var b = 1 + 2;
var c = "coo" + "kie";
var a = 1+1,b = 2+2;
var c = 3;
var d = "1" + 1;
var e = 1 + '2';
`

let ast = parser.parse(jscode);
traverse(ast, {
    BinaryExpression(path) {
        let {left, operator, right} = path.node;
        if (types.isStringLiteral(left) && operator === '+' && types.isStringLiteral(right)){
            const value = left.value + right.value;
            path.replaceWith(types.valueToNode(value));
        }
    }
});
let {code} = generator(ast);
console.log(code);