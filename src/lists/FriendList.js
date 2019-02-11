import React from "react";
import FriendCard from "../components/FriendCard";

class FriendList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        FriendList
        <header>
          <h2>Respond to Your Friend Request</h2>
          <a href="#" style={{ color: "#4167b2 ", textDecoration: "none" }}>
            View Sent Requests
          </a>
        </header>
        <hr />
        <FriendCard />
        <FriendCard />
        <header>
          <h2>People You May Know</h2>
        </header>
        <hr />
        <FriendCard />
        <FriendCard />
        <FriendCard />
      </div>
    );
  }
}

export default FriendList;
