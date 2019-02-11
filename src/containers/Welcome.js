import React from "react";
import "../stylesheets/welcome.css";
import WelcomePage from "../components/WelcomeCard";
import Forms from "../lists/Forms";

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
          <Forms />
        </div>
      </React.Fragment>
    );
  }
}

export default Welcome;
