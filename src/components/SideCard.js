import React from "react";

const SideCard = props => {
  return (
    <div className="card-container">
      <div className="card-content">
        <h3>
          <i
            className="fas fa-images"
            style={{
              display: "inline",
              margin: "5px auto",
              padding: "10px"
            }}
          />{" "}
          Photos
        </h3>
        <a href="#" style={{ color: "royalblue" }}>
          add photo
        </a>
      </div>

      <div className="card-image">
        <img
          src="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="collage"
          style={{
            width: "22vw",
            height: "200px",
            margin: "0px -20px 0px",
            padding: "10px"
          }}
        />
      </div>
    </div>
  );
};

export default SideCard;
