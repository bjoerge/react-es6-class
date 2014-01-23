// Provides an easy way to register a set of source transforms for a file extension
// The transforms are applied in the given order, and each transform passes its resulting source code to the next
var path = require("path");
var fs = require("fs");

module.exports = install;

function install(extension, compilers) {
  require.extensions[extension] = function(module, filename) {
    var src = fs.readFileSync(filename, {encoding: 'utf8'});
    src = compilers.reduce(function(src, compiler) {
      return compiler(filename, src);
    }, src);
    module._compile(src, filename);
  };
}