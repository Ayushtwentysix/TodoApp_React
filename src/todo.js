import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      all: ["feed dog"]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // const all = [...this.state.all, this.state.task];
    this.setState((a, b) => ({
      all: [...a.all, this.state.task],
      task: " "
    }));
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <center>
          <h1>Simple ToDo App</h1>
        </center>
        <form onSubmit={this.handleSubmit}>
          <center>
            <input
              name="task"
              value={this.state.task}
              placeholder="Enter your task here"
              onChange={this.handleChange}
            />
            <input type="submit" value="submit" />
          </center>
        </form>

        <ol>
          <h3>
            {this.state.all.map((r, index) => (
              <li>{r}</li>
            ))}
          </h3>
        </ol>
      </div>
    );
  }
}

export default Todo;
