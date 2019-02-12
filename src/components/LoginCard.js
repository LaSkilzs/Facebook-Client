import React from "react";
import "../stylesheets/welcome.css";

class LoginCard extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="login">
          <form className="login-form">
            <div className="test">
              <div className="login-info">
                <h1 className="login-header">Sign Up</h1>
                <p className="login-info">It's free and always will be</p>
              </div>
              <input
                type="text"
                placeholder="name"
                className="login-input"
                style={{ backgroundColor: "white" }}
              />
              <input
                type="text"
                placeholder="username"
                className="login-input"
                style={{ backgroundColor: "white" }}
              />
              <input
                type="email"
                placeholder="email"
                className="login-input"
                style={{ backgroundColor: "white" }}
              />
              <input
                type="password"
                placeholder="password"
                className="login-input"
                style={{ backgroundColor: "white" }}
              />
              <input
                type="text"
                placeholder="birthday"
                className="login-input"
                style={{ backgroundColor: "white" }}
              />
              <p className="login-info">
                By clicking Sign Up, you agree to our Terms, Data Policy and
                Cookies Policy. You may receive SMS Notifications from us and
                can opt out any time.
              </p>
              <button type="submit" className="login-button">
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
