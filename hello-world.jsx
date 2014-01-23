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
          What is your name? <input type="text" name="name" onInput="this.onNameInput" placeholder="Your name here" />
        </p>
        <p>
          Hello {this.state.name}, it is {this.props.date.toTimeString()}
        </p>
      </div>
    );
  }
}

module.exports = React.createClass(HelloWorld.prototype);