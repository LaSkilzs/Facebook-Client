import React from "react";

const AdCard = props => {
  return (
    <div>
      <li className="adlink">
        <i className="far fa-image" />
        News Feed
      </li>
      <li className="adlink">
        <i className="fas fa-sms" />
        Messenger
      </li>
      <li className="adlink">
        <i className="fas fa-clock" />
        Watch
      </li>
      <li className="adlink">
        <i className="fas fa-store" />
        Marketplace
      </li>
      <br />
      <h2>Shortcuts</h2>
      <li className="adlink">
        <i className="fas fa-laugh-wink" />
        Lol
      </li>
      <br />
      <h2>Explore</h2>
      <li className="adlink">
        <i className="fas fa-users" />
        Groups
      </li>
      <li className="adlink">
        <i className="far fa-file-alt" />
        Pages
      </li>
      <li className="adlink">
        <i className="fas fa-calendar-week" />
        Events
      </li>
      <li className="adlink">
        <i className="fas fa-heart" />
        Fundraisers
      </li>
      <li className="adlink">
        <i className="fas fa-gamepad" />
        Games
      </li>
    </div>
  );
};

export default AdCard;
