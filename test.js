var compiler = require("./compile-es6");
function compileES6(filename, src) {
  return compiler(filename, src).source;
}
var compileJSX = require("./compile-jsx");


var install = require("./install-transpilers");
install('.jsx', [compileJSX, compileES6]);
install('.js', [compileES6]);

var React = require("react");

var HelloWorld = require("./hello-world");

React.renderComponentToString(HelloWorld({date: new Date()}), function(str) {
  console.log(str)
});