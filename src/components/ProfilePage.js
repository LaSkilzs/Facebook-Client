import React from "react";
import "../stylesheets/profile.css";
import Home from "../containers/Home";
import userData from "../user";

class ProfilePage extends React.Component {
  constructor() {
    super();
    this.state = {
      userData
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="profile-container">
          <div className="profile-card">
            <div className="profile-image">
              <img
                src={this.state.userData[0].image}
                alt=""
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover"
                }}
              />
              <div className="profile-navbar">
                <ul className="profile-navlinks">
                  <li style={{ backgroundColor: "white" }}>
                    <button className="profile-button">Timeline</button>
                  </li>
                  <li style={{ backgroundColor: "white" }}>
                    <button className="profile-button">About</button>
                  </li>
                  <li style={{ backgroundColor: "white" }}>
                    <button className="profile-button">Friends</button>
                  </li>
                  <li style={{ backgroundColor: "white" }}>
                    <button className="profile-button">Photos</button>
                  </li>
                  <li style={{ backgroundColor: "white" }}>
                    <button className="profile-button">Archive</button>
                  </li>
                  <li style={{ backgroundColor: "white" }}>
                    <button className="profile-button">More</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Home />
      </React.Fragment>
    );
  }
}

export default ProfilePage;
