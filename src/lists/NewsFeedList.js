import React from "react";
import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";
class NewsFeedList extends React.Component {
  render() {
    const { comments, posts } = this.props;
    return (
      <div className="feedlist-container">
        <CreatePost />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    );
  }
}

export default NewsFeedList;
