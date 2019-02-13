import React from "react";
import "../stylesheets/welcome.css";
import WelcomePage from "../components/WelcomePage";
import LoginCard from "../components/LoginCard";

class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="welcome-container">
          <WelcomePage />
          <LoginCard handleSubmit={this.props.handleSubmit} />
        </div>
      </React.Fragment>
    );
  }
}

export default Welcome;
