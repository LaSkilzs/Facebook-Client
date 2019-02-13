import React from "react";

const Post = () => {
  return (
    <div className="postcard-container">
      <div className="image-card">
        <img
          src={"https://via.placeholder.com/75"}
          alt="pic"
          style={{
            borderRadius: "50%",
            marginLeft: "30px"
          }}
        />
        <span style={{ padding: "10px" }}>
          <strong style={{ fontSize: "20px" }}>NOThING</strong>
          shared post with friends and group.
        </span>
      </div>
      <span style={{ marginLeft: "50px", backgroundColor: "white" }}>
        <strong style={{ backgroundColor: "white" }}>Nothing Yet</strong>
      </span>
      <br />
      <div className="post-image">
        <p
          style={{
            fontSize: "2rem",
            padding: "5px",
            marginLeft: "5px",
            marginRight: "5px",
            textAlign: "center"
          }}
        >
          {/* Post Area */}
        </p>
        <p style={{ backgroundColor: "white" }}>
          <span style={{ marginLeft: "40px", backgroundColor: "white" }}>
            Likes:0
          </span>
          <span style={{ marginLeft: "250px", backgroundColor: "white" }}>
            Comments:0
          </span>
        </p>
      </div>
      <hr />
      <div className="card-details">
        <div style={{ backgroundColor: "white" }}>
          <a href="##" style={{ backgroundColor: "white" }}>
            <i
              className="fas fa-thumbs-up"
              style={{ backgroundColor: "white" }}
            />
            like
          </a>
        </div>
        <div style={{ backgroundColor: "white" }}>
          <a href="##" style={{ backgroundColor: "white" }}>
            <i
              className="fas fa-comment"
              style={{ backgroundColor: "white" }}
            />
            comment
          </a>
        </div>
        <div style={{ backgroundColor: "white" }}>
          <a href="##" style={{ backgroundColor: "white" }}>
            <i className="fas fa-share" style={{ backgroundColor: "white" }} />
            share
          </a>
        </div>
      </div>
      <hr />
      <br />

      <input
        type="text"
        placeholder="Write a Comment"
        style={{
          width: "85%",
          marginLeft: "35px",
          borderRadius: "25px",
          marginTop: "5px",
          backgroundColor: "#e9ebee",
          border: "2px solid #787b74",
          padding: "10px"
        }}
      />
    </div>
  );
};

export default Post;
