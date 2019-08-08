import React, { Component } from "react";

class Contact extends Component {
    render() {
        return (
            <div className=" container">
                <div className="row">
                    <div className="col s12 center">

                        <div className="card teal darken-4 darken-1">
                            <div className="card-action">
                                <i className="material-icons"> phone </i>
                            </div>
                            <div className="card-content white-text">
                                <span className="card-title"> Téléphone </span>
                                <p> 02 256 85 49 </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 center">

                        <div className="card teal darken-4 darken-1">
                            <div className="card-action">
                                <i className="material-icons"> email </i>
                            </div>
                            <div className="card-content white-text">
                                <span className="card-title"> Email </span>
                                <p> info@espacefurcan.be </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 center">

                        <div className="card teal darken-4 darken-1">
                            <div className="card-action">
                                <i className="material-icons"> location_on </i>
                            </div>
                            <div className="card-content white-text">
                                <span className="card-title"> Adresse </span>
                                <p> Avenue Notre Dame 123, 1140 Evere </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;