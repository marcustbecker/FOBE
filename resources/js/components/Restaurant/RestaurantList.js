import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../css/app.css";

export default class RestaurantList extends Component {
    constructor() {
        super();
        this.state = {
            restaurants: [],
        };
    }

    componentDidMount() {
        axios.get("/restaurant").then((response) => {
            this.setState({
                restaurants: response.data.restaurants,
            });
        });
    }

    deleteRes(restaurant) {
        console.log(restaurant.id);
        axios.delete(`/restaurant/${restaurant.id}`).then((response) => {
            console.log(response);
            window.location.reload();
        });
    }

    render() {
        const restaurants = this.state.restaurants;
        console.log(restaurants);
        return (
            <div className="container py-4">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">All Restaurants</div>
                            <div className="card-body">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <th>Name</th>
                                            <th>Address</th>
                                            <th>Latitude</th>
                                            <th>Longitude</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                        {Object.keys(restaurants).map(
                                            (restaurant, i) => (
                                                //<Link
                                                //    className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                                                //    to={`/${foods[food].id}`}
                                                //   key={foods[food].id}
                                                //>
                                                <tr
                                                    key={
                                                        restaurants[restaurant]
                                                            .id
                                                    }
                                                >
                                                    <td>
                                                        {
                                                            restaurants[
                                                                restaurant
                                                            ].name
                                                        }
                                                    </td>
                                                    <td>
                                                        {
                                                            restaurants[
                                                                restaurant
                                                            ].address
                                                        }
                                                    </td>
                                                    <td>
                                                        {
                                                            restaurants[
                                                                restaurant
                                                            ].lat
                                                        }
                                                    </td>
                                                    <td>
                                                        {
                                                            restaurants[
                                                                restaurant
                                                            ].lng
                                                        }
                                                    </td>
                                                    <td>
                                                        <Link
                                                            className="btn btn-primary btn-sm mb-3"
                                                            to={`/restaurantEdit/${restaurants[restaurant].id}`}
                                                        >
                                                            Edit
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        <button
                                                            className="btn btn-primary btn-sm mb-3"
                                                            onClick={this.deleteRes.bind(
                                                                this,
                                                                restaurants[
                                                                    restaurant
                                                                ]
                                                            )}
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                                //</Link>
                                            )
                                        )}
                                    </tbody>
                                </table>
                                <Link
                                    className="btn btn-primary btn-sm mb-3"
                                    to="/restaurantAdd"
                                >
                                    Create New Restaurant
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
