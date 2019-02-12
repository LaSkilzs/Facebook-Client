import React from "react";

const FriendCard = props => {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <img
            src="https://via.placeholder.com/100"
            alt=""
            style={{
              borderRadius: "50%",
              marginLeft: "50%"
            }}
          />
        </div>
        <div className="card-content">
          <h4 style={{ color: "royalblue", backgroundColor: "white" }}>Name</h4>
          <h4 style={{ color: "grey", backgroundColor: "white" }}>Location</h4>
          <h4 style={{ backgroundColor: "white" }}>
            <i className="fas fa-users" style={{ backgroundColor: "white" }} />
            Mutal Friends
          </h4>
        </div>
        <div style={{ backgroundColor: "white" }}>
          <button className="friend" style={{ backgroundColor: "grey" }}>
            delete request
          </button>
          <button className="friend">request</button>
        </div>
      </div>
      <hr
        style={{
          border: "1px solid grey",
          width: "100%",
          margin: "auto"
        }}
      />
    </div>
  );
};

export default FriendCard;
