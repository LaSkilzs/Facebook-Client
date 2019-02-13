import React from "react";
import "../stylesheets/newsfeed.css";
import SideBar from "../lists/SideBar";
import NewsFeedList from "../lists/NewsFeedList";
import Ads from "../containers/Ads";
import Footer from "../containers/Footer";
import data from "../adData";

class NewsFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      data: data,
      focus: "feed"
    };
  }

  render() {
    const { comments, posts } = this.props;

    return (
      <React.Fragment>
        <div className="news-container">
          <Ads />
          <NewsFeedList
            comments={comments}
            posts={posts}
            focus={this.state.focus}
            createPost={this.props.createPost}
            postClickHandler={this.props.postClickHandler}
          />
          <SideBar data={this.state.data} focus={this.state.focus} />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default NewsFeed;
