import React from "react";
import SideBar from "../lists/SideBar";
import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";
class NewsFeedList extends React.Component {
  render() {
    return (
      <div className="feedlist-container">
        NewsFeedList
        <CreatePost />
        <PostCard />
      </div>
    );
  }
}

export default NewsFeedList;
