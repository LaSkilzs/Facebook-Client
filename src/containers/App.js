import React from "react";
import { Route, Switch } from "react-router-dom";
import "../stylesheets/App.css";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import NewsFeed from "./NewsFeed";
import Friends from "./Friends";
import NotFound from "../components/NotFound";
import ProfilePage from "../components/ProfilePage";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      parent: "home"
    };
  }
  render() {
    return (
      <div className="container">
        <Navbar parent={this.state.parent} />

        <Switch>
          <Route path="/welcome" component={Welcome} />
          <Route path="/profilepage/:id" component={ProfilePage} />
          <Route path="/newsfeed" component={NewsFeed} />
          <Route path="/friends" component={Friends} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
