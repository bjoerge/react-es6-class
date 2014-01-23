var React = require("react-tools");

// Import everything in the transformer codepath before we add the import hook
React.transform('');

module.exports = function compile(filename, src) {
  try {
    return React.transform(src);
  } catch (e) {
    throw new Error('Error transforming ' + filename + ' to JSX: ' + e.toString());
  }
};