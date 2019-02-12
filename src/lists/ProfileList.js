import React from "react";
import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";

class ProfileList extends React.Component {
  render() {
    return (
      <div className="profile-container">
        <CreatePost />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    );
  }
}
export default ProfileList;
