
// Load transpilers/compilers/source transforms or whatever you prefer to call it
var compileES6 = require("./boilerplate/transpile-es6");
var compileJSX = require("./boilerplate/transpile-jsx");

// This functionality could probably be installed via npm
var install = require("./boilerplate/install-transpilers");

// Hook into require.extensions with the following transform functions
install('.jsx', [compileJSX, compileES6]);

// If we want to use ES6 syntax in other files we require()
install('.js', [compileES6]);

// --- end of boilerplate. Now, let it happen

var React = require("react");
var HelloWorld = require("./hello-world.jsx");

React.renderComponentToString(HelloWorld({name: "friend", date: new Date()}), function(str) {
  console.log(str)
});