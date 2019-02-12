import React from "react";
import "../stylesheets/navbar.css";
import "../stylesheets/App.css";
import { Link } from "react-router-dom";

const Navbar = props => {
  if (props.parent === "home") {
    return (
      <React.Fragment>
        <div className="navbar-container">
          <ul className="navlinks">
            <li className="links-bar">
              <i className="fab fa-facebook" />
            </li>
            <li className="links-bar">
              <input type="search" placeholder="search" name="search" />
              <button
                className="links-bar"
                type="submit"
                style={{ background: "#e9ebee" }}
              >
                search
              </button>
            </li>
            <Link to="/welcome">
              <li className="links">welcome</li>
            </Link>
            <Link to="/profilepage/:id">
              <li className="links">profile</li>
            </Link>
            <Link to="/newsfeed">
              <li className="links">home</li>
            </Link>
            <Link to="/friends">
              <li className="links ">find friends</li>
            </Link>
          </ul>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className="navbar-container">
          <ul className="navlinks">
            <li className="links">Flatbook</li>
            <li className="links home">
              <input type="text" placeholder="username" name="username" />
            </li>
            <li className="links newsfeed">
              <input type="text" placeholder="password" name="password" />
            </li>
            <li className="links ">
              <button type="submit">Login</button>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
};

export default Navbar;
