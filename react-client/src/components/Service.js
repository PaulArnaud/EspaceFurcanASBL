import React, { Component } from "react";
import HeaderTable from "./HeaderTable";

class Service extends Component {
    render() {
        var listOfPrice = [];
        var prices = this.props.service.price;
        for (var key in prices) {
            listOfPrice.push(<td key={key}>{prices[key]} € </td>)
        }

        return (
            <div className="card" style={{height: "15em"}}>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4"> {this.props.service.name} <i className="material-icons right"> euro_symbol </i></span>
                    <p> {this.props.service.description} </p>
                </div>
                <div className="card-reveal center">
                    <span className="card-title grey-text text-darken-4">Prix : {this.props.service.name}<i className="material-icons right">close</i></span>
                    <table>
                        <HeaderTable />
                        <tbody>
                            <tr>
                                {listOfPrice}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Service;