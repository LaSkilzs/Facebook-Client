import React from "react";
const WelcomePage = () => {
  return (
    <div className="welcome-card">
      <div className="welcome-header">
        <h1 className="welcome">
          Connect with friends and the world around you on Facebook.
        </h1>
      </div>
      <div className="welcome-info">
        <ul>
          <li className="welcome-links">
            <p className="welcome-words">
              <i className="fas fa-newspaper" style={{ fontSize: "40px" }} />
              <strong>See photos and updates </strong>
              from friends in news feed.
            </p>
          </li>
          <li className="welcome-links">
            <p className="welcome-words">
              <i className="fas fa-comments" style={{ fontSize: "40px" }} />
              <strong>Share what's new </strong>
              in your life in your timeline.
            </p>
          </li>
          <li className="welcome-links">
            <p className="welcome-words">
              <i className="fas fa-share-alt" style={{ fontSize: "40px" }} />
              <strong>Find more </strong>
              of what your looking for with facebook search.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WelcomePage;
