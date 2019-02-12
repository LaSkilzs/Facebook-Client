import React from "react";
import SideCard from "../components/SideCard";

class SideBar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="side-container">
        <SideCard />
        <SideCard />
        <SideCard />
      </div>
    );
  }
}

export default SideBar;
