const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const types = require('@babel/types');
const generator = require('@babel/generator').default;

jsCode = `
navigator["\x75\x73"+"\x65\x72"+"\x41\x67"+"\x65\x6e"+"\x74"];
`;
let ast = parser.parse(jsCode);
judege = {
    "BinaryExpression|Identifier"(path) {
        let{confident, value} = path.evaluate();
        confident && path.replaceInline(types.valueToNode(value));
        // confident && path.replaceWith(types.valueToNode(value));
    }
}
traverse(ast, judege);
let {code} = generator(ast);
console.log(code);