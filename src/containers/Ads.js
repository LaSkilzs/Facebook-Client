import React from "react";
import AdCard from "../components/AdCard";

class Ads extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="adlist-container">
        Ads
        <ul>
          <AdCard />
        </ul>
      </div>
    );
  }
}

export default Ads;
