import React from "react";
import "../stylesheets/home.css";
import SideBar from "../lists/SideBar";
import ProfileList from "../lists/ProfileList.js";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="home-container">
          <SideBar />
          <ProfileList />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
