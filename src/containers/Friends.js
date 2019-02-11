import React from "react";
import "../stylesheets/friends.css";
import FriendList from "../lists/FriendList";
import Footer from "../containers/Footer";

class Friends extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="friends-container">
          <FriendList />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Friends;
