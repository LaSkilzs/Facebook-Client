import React from "react";
import "../stylesheets/home.css";
import SideBar from "../lists/SideBar";
import ProfileList from "../lists/ProfileList.js";
import homeData from "../homeFeedData";
import sideData from "../sideData";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      focus: "profile",
      homeData: homeData,
      sideData: sideData
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="home-container">
          <SideBar sideData={this.state.sideData} focus={this.state.focus} />
          <ProfileList
            homeData={this.state.homeData}
            focus={this.state.focus}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
