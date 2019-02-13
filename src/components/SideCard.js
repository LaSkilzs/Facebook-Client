import React from "react";
import "../stylesheets/home.css";

const SideCard = props => {
  if (props.focus === "feed") {
    return (
      <div className="card-container">
        <div className="card-content">
          <div className="card-header" style={{ backgroundColor: "white" }}>
            <h3 style={{ backgroundColor: "white" }}>
              <i
                className="fas fa-images"
                style={{
                  display: "inline",
                  margin: "5px auto",
                  backgroundColor: "white"
                }}
              />
              {props.ad.title}
            </h3>
            <a
              href="/"
              style={{ color: "royalblue", backgroundColor: "white" }}
            >
              add ad
            </a>
          </div>
          <div className="card-image">
            <img
              src={props.ad.image}
              alt="collage"
              style={{
                width: "100%",
                objectFit: "cover",
                height: "auto"
              }}
            />
          </div>
        </div>
      </div>
    );
  } else if (props.focus === "profile") {
    return (
      <div className="card-container">
        <div className="card-content">
          <div className="card-header" style={{ backgroundColor: "white" }}>
            <h3 style={{ backgroundColor: "white" }}>
              <i
                className="fas fa-images"
                style={{
                  display: "inline",
                  margin: "5px auto",
                  backgroundColor: "white"
                }}
              />
              {props.data.title}
            </h3>
            <a
              href="/"
              style={{ color: "royalblue", backgroundColor: "white" }}
            >
              add {props.data.category}
            </a>
          </div>
          <div className="card-image">
            <img
              src={props.data.image}
              alt="collage"
              style={{
                width: "100%",
                objectFit: "cover",
                height: "auto"
              }}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default SideCard;
