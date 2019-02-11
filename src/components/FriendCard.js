import React from "react";

const FriendCard = props => {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <img src="https://via.placeholder.com/100" alt="" />
        </div>
        <div className="card-content">
          <h4 style={{ color: "royalblue" }}>Name</h4>
          <h4 style={{ color: "grey" }}>Location</h4>
          <h4>
            <i className="fas fa-users" /> Mutal Friends
          </h4>
        </div>
        <div>
          <button className="friend" style={{ backgroundColor: "grey" }}>
            delete request
          </button>
          <button className="friend">confirm</button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default FriendCard;
