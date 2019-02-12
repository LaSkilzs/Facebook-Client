import React from "react";

const SideCard = props => {
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
            Photos
          </h3>
          <a href="/" style={{ color: "royalblue", backgroundColor: "white" }}>
            add photo
          </a>
        </div>
        <div className="card-image">
          <img
            src="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
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
};

export default SideCard;
