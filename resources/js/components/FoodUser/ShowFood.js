import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../css/app.css";

export class ShowFood extends Component {
    constructor() {
        super();
        this.state = {
            foods: [],
        };
    }

    componentDidMount() {
        axios.get('/food/' + id).then((response) => {
            this.setState({
                foods: response.data.foods,
            });
        });
    }

    render() {
        const foods = this.state.foods;
        console.log("Inside ShowFood!");
        console.log(foods);
        if (!this.state.foods) {
            return (
                <h1>Loading</h1>
            )
        } else {
            return (
                <div className="container py-4">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">All foods</div>
                                <div className="card-body">
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <th>Name</th>
                                                <th>Description</th>
                                                <th>Price</th>
                                            </tr>
                                            {Object.keys(foods).map((food, i) => (
                                                //<Link
                                                //    className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                                                //    to={`/${foods[food].id}`}
                                                //   key={foods[food].id}
                                                //>
                                                <tr key={foods[food].id}>
                                                    <td>{foods[food].foodName}</td>
                                                    <td>
                                                        {
                                                            foods[food]
                                                                .foodDescription
                                                        }
                                                    </td>
                                                    <td>
                                                        ${foods[food].foodPrice}
                                                    </td>
                                                </tr>
                                                //</Link>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default ShowFood;
