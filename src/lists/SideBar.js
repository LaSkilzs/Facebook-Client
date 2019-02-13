import React from "react";
import SideCard from "../components/SideCard";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (this.props.focus === "feed") {
      return (
        <div className="side-container">
          {this.props.data.map(ad => {
            return <SideCard key={ad.id} ad={ad} focus={this.props.focus} />;
          })}
        </div>
      );
    } else {
      return (
        <div className="side-container">
          {this.props.sideData.map(data => {
            return (
              <SideCard key={data.id} data={data} focus={this.props.focus} />
            );
          })}
        </div>
      );
    }
  }
}

export default SideBar;
