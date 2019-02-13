import React from "react";
import FriendCard from "../components/FriendCard";

class FriendList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { fakefriends, profiles } = this.props;
    return (
      <div>
        <header>
          <h2 style={{ backgroundColor: "white" }}>People You May Know</h2>
          <a
            href="/"
            style={{
              color: "#4167b2 ",
              textDecoration: "none",
              backgroundColor: "white"
            }}
          >
            View Sent Requests
          </a>
        </header>
        <hr
          style={{
            border: "1px solid grey",
            width: "100%",
            margin: "auto"
          }}
        />
        {profiles.map(profile => {
          return <FriendCard key={profile.id} profile={profile} />;
        })}
        <header>
          <h2 style={{ backgroundColor: "white" }}>
            Respond to Your Friend Request
          </h2>
        </header>
        <hr
          style={{
            border: "1px solid grey",
            width: "100%",
            margin: "auto"
          }}
        />
        {/* {fakefriends.map(friend => {
          return <FriendCard key={friend.id} friend={friend} />;
        })} */}
      </div>
    );
  }
}

export default FriendList;
