import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper green">
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li>
                <Link to="/" style={{ fontFamily: "system-ui" }} className="black-text" >
                  <i className="material-icons"> home </i>
                </Link>
              </li>
              <li>
                <Link to="/services" style={{ fontFamily: "system-ui" }} className="black-text">
                  <i className="material-icons">code</i>
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ fontFamily: "system-ui" }} className="black-text">
                  <i className="material-icons"> info </i>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;