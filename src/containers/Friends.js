import React from "react";
import "../stylesheets/friends.css";
import FriendList from "../lists/FriendList";
import Footer from "../containers/Footer";

class Friends extends React.Component {
  render() {
    const { fakefriends, profiles } = this.props;
    return (
      <React.Fragment>
        <div className="friends-container">
          <FriendList fakefriends={fakefriends} profiles={profiles} />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Friends;
