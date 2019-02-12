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
      parent: "home",
      profiles: [],
      fakefriends: [],
      posts: [],
      comments: []
    };
  }

  async componentDidMount() {
    const responsePr = await fetch("http://localhost:3000/api/v1/profiles");
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const responsePo = await fetch("http://localhost:3000/api/v1/posts");
    const responseC = await fetch("http://localhost:3000/api/v1/comments");
    const profiles = await responsePr.json();
    const fakefriends = await response.json();
    const posts = await responsePo.json();
    const comments = await responseC.json();
    this.setState({ profiles, fakefriends, posts, comments });
  }

  render() {
    return (
      <div className="container">
        <Navbar parent={this.state.parent} />

        <Switch>
          <Route path="/welcome" component={Welcome} />
          <Route path="/profilepage/:id" component={ProfilePage} />
          <Route
            path="/newsfeed"
            render={() => (
              <NewsFeed
                posts={this.state.posts}
                comments={this.state.comments}
              />
            )}
          />
          <Route
            path="/friends"
            render={() => (
              <Friends
                profiles={this.state.profiles}
                fakefriends={this.state.fakefriends}
              />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
