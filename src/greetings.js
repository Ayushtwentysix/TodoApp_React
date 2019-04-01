import React, { Component } from "react";

class Greetings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.match.params.name,
      place: this.props.match.params.place
    };
  }
  render() {
    return (
      <div>
        Hello, {this.state.name}
        <div>I live at: {this.state.place}</div>
      </div>
    );
  }
}

export default Greetings;
