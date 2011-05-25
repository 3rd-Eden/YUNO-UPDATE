var fs = require('fs')
  , ugly = require("uglify-js")
  , jsp = ugly.parser
  , pro = ugly.uglify;

// get the file
var yuno = fs.readFileSync(__dirname + '/../lib/yuno.js', 'utf8');

var ast = jsp.parse(yuno); // parse code and get the initial AST
ast = pro.ast_mangle(ast); // get a new AST with mangled names
ast = pro.ast_squeeze(ast); // get an AST with compression optimizations

fs.write(fs.openSync(__dirname + '/../lib/yuno.min.js', 'w'), pro.gen_code(ast), 0, 'utf8');