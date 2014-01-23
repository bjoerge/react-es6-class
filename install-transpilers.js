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