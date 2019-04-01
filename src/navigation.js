import React, { Component } from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Todo from "./todo";
import HackerNews from "./hackernews";
import Greetings from "./greetings";
class SwitchDemo extends Component {
  render() {
    return (
      <div>
        {/* <NavLink to="/hello/ayush/mathura">
          <button>home</button>
        </NavLink> */}
        {/* <div> </div>
        <NavLink exact to="/Hackernews">
          <button>HackerNews</button>
        </NavLink> */}
        {/* <div> </div> */}
        {/* <NavLink exact to="/Todo">
          <button>Todo</button>
        </NavLink> */}
        <Switch>
          <Route exact path="/Hackernews" component={HackerNews} />
          <Route exact path="/Todo" component={Todo} />
          <Route path="/hello/:name/:place" component={Greetings} />
        </Switch>
        <button onClick={() => this.props.history.push("/Todo")}>
          Go Back{" "}
        </button>
      </div>
    );
  }
}

export default withRouter(SwitchDemo);
