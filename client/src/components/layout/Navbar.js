import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper green">
            <Link to="/" style={{ fontFamily: "system-ui" }} className="brand-logo left black-text" >
              <i className="material-icons"> home </i>
              Espace Furcan
            </Link>
            <Link to="/services" style={{ fontFamily: "system-ui" }} className="brand-logo center black-text">
              <i className="material-icons">code</i>
              Services
            </Link>
            <Link to="/contact" style={{ fontFamily: "system-ui" }} className="brand-logo right black-text">
              <i className="material-icons"> info </i>
              Contact
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;