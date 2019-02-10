import React from "react";
import { Route, Switch } from "react-router-dom";
import "../stylesheets/App.css";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Home from "./Home";
import NewsFeed from "./NewsFeed";
import Friends from "./Friends";
import NotFound from "../components/NotFound";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      parent: "welcome"
    };
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Navbar parent={this.state.parent} />
          <Switch>
            <Route path="/welcome" component={Welcome} />
            <Route path="/home" component={Home} />
            <Route path="/newsfeed" component={NewsFeed} />
            <Route path="/friends" component={Friends} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
