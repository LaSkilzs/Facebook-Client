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
            <h2 style={{ display: "inline", padding: "15px" }}>Create Post</h2>
            <button type="button" className="modal-button">
              <i className="fas fa-pencil-alt" />
              create post
            </button>
            <button type="button" className="modal-button">
              <i className="fas fa-camera-retro" />
              photo/video
            </button>
          </div>
          <div className="modal-body">
            <textarea name="post" cols="50" rows="8" />
          </div>
          <div className="signature">
            <h3 style={{ display: "inline", padding: "15px" }}>Modal Footer</h3>
            <button type="button" className="modal-button">
              <i className="fas fa-images" />
              photo/video
            </button>
            <button type="button" className="modal-button">
              <i className="fas fa-user-tag" />
              tag friends
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePost;
