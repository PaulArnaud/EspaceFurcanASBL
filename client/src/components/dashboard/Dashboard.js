import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Reservation from "../Reservation";
import UserReservations from "../UserReservation";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  
  render() {
    const { user } = this.props.auth;
    return (
      <div>
        <div className=" row container valign-wrapper">
          <div className="row">
            <div className="col s12 center-align">
              <h4>
                <b>Bonjour </b> {user.name.split(" ")[0]} !
                <p className="flow-text grey-text text-darken-1">
                  Vous êtes connectés sur l'application de l'espace furcan{" "}  👏
                </p>
              </h4>
              <button style={{ width: "200px", borderRadius: "3px", letterSpacing: "1.5px", marginTop: "1rem" }} onClick={this.onLogoutClick} className="btn btn-large waves-effect waves-light hoverable green accent-3" >
                Deconnexion
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <Reservation />
        </div>
        <div className="row">
          <UserReservations userId={user.id} />
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);