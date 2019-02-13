import React from "react";
import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";
import Post from "../components/Post";

class NewsFeedList extends React.Component {
  render() {
    const { posts, focus } = this.props;
    return (
      <div className="feedlist-container">
        <CreatePost
          postClickHandler={this.props.postClickHandler}
          createPost={this.props.createPost}
          value={this.props.value}
        />
        {/* <Post /> */}
        {posts.map(post => {
          return <PostCard key={post.id} post={post} focus={focus} />;
        })}
      </div>
    );
  }
}

export default NewsFeedList;
