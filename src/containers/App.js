import React from "react";
import { Route, Switch } from "react-router-dom";
import "../stylesheets/App.css";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import NewsFeed from "./NewsFeed";
import Friends from "./Friends";
import NotFound from "../components/NotFound";
import ProfilePage from "../components/ProfilePage";
import userData from "../user";
import API from "../API";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      parent: "home",
      profiles: [],
      fakefriends: [],
      posts: [],
      filteredPosts: [],
      comments: [],
      userData: userData,
      post: {
        id: 0,
        text: "",
        image: "",
        likes: 0,
        comments: 0,
        user_id: 0
      },
      value: "",
      user: {},
      username: "",
      login: ""
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
    this.setState({
      profiles,
      fakefriends,
      posts,
      comments,
      filteredPosts: posts
    });
  }

  login = username => this.setState({ username });
  logout = () => this.setState({ username: "" });

  createUser = e => {
    // console.log("i work");
    if (e.target.name === "username") {
      this.setState({ username: e.target.value });
    } else if (e.target.name === "email") {
      this.setState({ email: e.target.value });
    } else if (e.target.name === "password") {
      this.setState({ password: e.target.value });
    }
  };

  createPost = value => {
    if (value.toLowerCase().includes("http")) {
      this.setState(prevState => ({
        post: {
          ...prevState.post,
          image: value,
          user_id: this.state.userData[0].id
        },
        value: ""
      }));
    } else {
      this.setState(prevState => ({
        post: {
          ...prevState.post,
          text: value
        },
        value: ""
      }));
    }
  };

  postClickHandler = () => {
    console.log(this.state.post);
    console.log(this.state.value);
    const filteredPosts = [this.state.post, ...this.state.posts];
    this.setState(prevState => ({
      filteredPosts,
      post: {
        ...prevState.post,
        text: "",
        image: ""
      }
    }));
  };

  handleSubmit = (e, username, password, email) => {
    e.preventDefault();
    let user = {
      username: username,
      password: password,
      email: email
    };

    if (API.login(user) !== {}) {
      this.setState({ login: user["username"] });
    }
  };

  handleLogin = (e, username, password) => {
    e.preventDefault();

    let user = {
      username: username,
      password: password
    };

    if (API.login(user) !== {}) {
      this.setState({ login: user["username"] });
    }
    console.log(user);
  };

  render() {
    console.log(this.state.login);
    return (
      <div className="container">
        <Navbar
          login={this.state.login}
          handleLogin={this.handleLogin}
          loginUser={this.loginUser}
        />

        <Switch>
          <Route
            path="/welcome"
            render={routerProps => {
              return (
                <Welcome
                  handleSubmit={this.handleSubmit}
                  login={this.state.login}
                  {...routerProps}
                />
              );
            }}
          />
          <Route
            path="/profilepage/:id"
            render={() => <ProfilePage login={this.state.login} />}
          />
          <Route
            path="/newsfeed"
            render={() => (
              <NewsFeed
                posts={this.state.filteredPosts}
                comments={this.state.comments}
                userData={this.state.userData}
                createPost={this.createPost}
                value={this.state.value}
                postClickHandler={this.postClickHandler}
                login={this.state.login}
              />
            )}
          />
          <Route
            path="/friends"
            render={() => (
              <Friends
                profiles={this.state.profiles}
                fakefriends={this.state.fakefriends}
                login={this.state.login}
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
