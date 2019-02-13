import React from "react";
import "../stylesheets/welcome.css";

class LoginCard extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      username: "",
      password: "",
      email: ""
    };
  }

  createUser = e => {
    if (e.target.name === "username") {
      this.setState({ username: e.target.value });
    } else if (e.target.name === "email") {
      this.setState({ email: e.target.value });
    } else if (e.target.name === "password") {
      this.setState({ password: e.target.value });
    }
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <React.Fragment>
        <div className="login">
          <form
            className="login-form"
            onSubmit={e =>
              handleSubmit(
                e,
                this.state.username,
                this.state.password,
                this.state.email
              )
            }
          >
            <div className="test">
              <div className="login-info">
                <h1 className="login-header">Sign Up</h1>
                <p className="login-info">It's free and always will be</p>
              </div>
              <input
                type="text"
                placeholder="name"
                className="login-input"
                name="name"
                style={{ backgroundColor: "white" }}
                onChange={this.createUser}
              />
              <input
                type="text"
                placeholder="username"
                className="login-input"
                name="username"
                style={{ backgroundColor: "white" }}
                onChange={this.createUser}
                required
              />
              <input
                type="email"
                placeholder="email"
                className="login-input"
                style={{ backgroundColor: "white" }}
                name="email"
                onChange={this.createUser}
                required
              />
              <input
                type="password"
                placeholder="password"
                className="login-input"
                style={{ backgroundColor: "white" }}
                name="password"
                onChange={this.createUser}
              />
              <input
                type="text"
                placeholder="birthday"
                className="login-input"
                style={{ backgroundColor: "white" }}
                name="birthday"
                onChange={this.createUser}
              />
              <p className="login-info">
                By clicking Sign Up, you agree to our Terms, Data Policy and
                Cookies Policy. You may receive SMS Notifications from us and
                can opt out any time.
              </p>
              <button
                type="submit"
                className="login-button"
                onClick={this.props.createUser}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginCard;
