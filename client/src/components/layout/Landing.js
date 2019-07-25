import React, { Component } from "react";
import { Link } from "react-router-dom";
class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
            <div className="col s6">
              <Link to="/register" style={{ width: "200px", borderRadius: "3px", letterSpacing: "1.5px" }} className="btn btn-large waves-effect hoverable green black-text " >
                Inscription
              </Link>
            </div>
            <div className="col s6">
              <Link to="/login" style={{ width: "200px", borderRadius: "3px", letterSpacing: "1.5px" }} className="btn btn-large waves-effect hoverable green black-text" >
                Connexion
              </Link>
            </div>
        </div>
      </div>
    );
  }
}
export default Landing;