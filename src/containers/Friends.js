import React from "react";

class Friends extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="friends-container">
          <h2>Friends Page</h2>
          <div className="cell cell-1">cell 1</div>
          <div className="cell cell-2">cell 2</div>
          <div className="cell cell-3">cell 3</div>
          <div className="cell cell-4">cell 4</div>
          <div className="cell cell-5">cell 5</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Friends;
