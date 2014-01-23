A proof of concept demonstrating server side [React](http://facebook.github.io/react/) rendering with ECMAScript 6 [class syntax](http://wiki.ecmascript.org/doku.php?id=strawman:maximally_minimal_classes), so that 
you can write your React components like this:

```js
/** @jsx React.DOM */
var React = require("react");

class HelloWorld {
  getInitialState() {
    return {
      name: null
    };
  }
  onNameInput(e) {
    this.setState({name: e.target.value});
  }
  render() {
    return (
      <div>
        <p>
          What is your name?
          <input type="text" name="name" onInput="this.onNameInput" placeholder="Your name here" />
        </p>
        <p>
          Hello {this.state.name}, it is {this.props.date.toTimeString()}
        </p>
      </div>
    );
  }
}

module.exports = React.createClass(HelloWorld.prototype);
```

Note: Since you normally create React classes by calling `React.createClass()`, and React apparently has no way (yet) of [extending a base component class](https://github.com/facebook/react/issues/613), you will have to call React.createClass(HelloWorld.prototype) after defining the component class.


### Try out

    git clone git://github.com/bjoerge/react-es6-class
    cd react-es6-class
    npm install
    node test.js

Now you should see something like this:

```html
<div data-reactid=".r[3ujcb]" data-react-checksum="-430268094">
  <p data-reactid=".r[3ujcb].[0]">
    <span data-reactid=".r[3ujcb].[0].[0]">What is your name?</span>
    <input type="text" name="name" placeholder="Your name here" data-reactid=".r[3ujcb].[0].[1]">
  </p>
  <p data-reactid=".r[3ujcb].[1]">
    <span data-reactid=".r[3ujcb].[1].[0]"> Hello </span>
    <span data-reactid=".r[3ujcb].[1].[1]">friend</span>
    <span data-reactid=".r[3ujcb].[1].[2]">, it is </span>
    <span data-reactid=".r[3ujcb].[1].[3]">18:14:40 GMT+0100 (CET)</span>
  </p>
</div>
```

### About
This is a simple proof of concept. It hooks into Node.js `require.extensions` and compiles `.jsx` files on the fly using `React.transform` and the [Traceur compiler](https://github.com/google/traceur-compiler) (in that order). It works because [esprima](https://github.com/ariya/esprima) (which is used internally by `React.transform`) has experimental support for ES6/Harmony features. Please note that using [require.extensions](http://nodejs.org/api/globals.html#globals_require_extensions) is considered [bad practice](https://github.com/joyent/node/pull/5376).

Other ECMAScript 6 features (default parameters, spread, generators, etc) may also work, but is yet to be tested.

The ES6 compiler code is originally based on [es6ify](http://thlorenz.github.io/es6ify/) by thlorenz.

### Todo
- Add browser side example using browserify + es6ify + reactify.
