import React from "react";

const PostCard = props => {
  return (
    <React.Fragment>
      <div className="postcard-container">
        {/* <div className="card"> */}
        <div className="image-card">
          <img src="https://via.placeholder.com/75" alt="pic" />
          <div>
            <span style={{ padding: "50px" }}>username</span>
          </div>
        </div>
        <span>date of post</span>
        <div className="post-image">
          <img
            src="https://images.pexels.com/photos/1844252/pexels-photo-1844252.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
            style={{
              width: "500px",
              height: "300px",
              textAlign: "center",
              padding: "10px"
            }}
          />
          <p>
            <span>Likes: </span>
            <span>Comments: </span>
          </p>
        </div>
        <hr />

        <a href="#">
          <i className="fas fa-thumbs-up" />
          like
        </a>
        <a href="#">
          <i className="fas fa-comment" />
          comment
        </a>
        <a href="#">
          <i className="fas fa-share" />
          share
        </a>
        <hr />
        {/* </div> */}
      </div>
    </React.Fragment>
  );
};

export default PostCard;
