import React from "react";
import "../stylesheets/newsfeed.css";
import SideBar from "../lists/SideBar";
import NewsFeedList from "../lists/NewsFeedList";
import Ads from "../containers/Ads";
import Footer from "../containers/Footer";

class NewsFeed extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { comments, posts } = this.props;

    return (
      <React.Fragment>
        <div className="news-container">
          <Ads />
          <NewsFeedList comments={comments} posts={posts} />
          <SideBar />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default NewsFeed;
