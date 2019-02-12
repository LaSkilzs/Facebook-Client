import React from "react";
import "../stylesheets/home.css";

class CreatePost extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="post-container">
        <div className="modal-content">
          <div className="signature">
            <h2 style={{ display: "inline", padding: "5px", fontSize: "15px" }}>
              Create Post
            </h2>
          </div>
          <div className="modal-body">
            <textarea name="post" cols="50" rows="8" />
          </div>
          <div className="signature">
            <button type="button" className="modal-button">
              <i className="fas fa-pencil-alt" style={{ fontSize: "10px" }} />
              create post
            </button>
            <button type="button" className="modal-button">
              <i className="fas fa-camera-retro" style={{ fontSize: "10px" }} />
              photo/video
            </button>
            <button type="button" className="modal-button">
              <i className="fas fa-images" style={{ fontSize: "10px" }} />
              photo/video
            </button>
            <button type="button" className="modal-button">
              <i className="fas fa-user-tag" style={{ fontSize: "10px" }} />
              tag friends
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePost;
