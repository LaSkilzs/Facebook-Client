import React from "react";
import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";

class ProfileList extends React.Component {
  render() {
    const { homeData, focus } = this.props;
    return (
      <div className="profile-container">
        <CreatePost />
        {homeData.map(post => {
          return <PostCard key={post.id} post={post} focus={focus} />;
        })}
      </div>
    );
  }
}
export default ProfileList;
