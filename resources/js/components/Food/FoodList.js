import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../css/app.css";

export default class FoodList extends Component {
    constructor() {
        super();
        this.state = {
            foods: [],
        };
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    getFoods() {
        axios.get("/food").then((response) => {
            this.setState({
                foods: response.data.foods,
            });
        });
    }
    componentDidMount() {
        this.getFoods();
    }
    handleDelete(id) {
        const foods = this.state.foods;
        console.log("foods:");
        console.log(foods);
        const foodArray = Object.keys(foods);
        const isNotId = (food) => food.id !== id;
        const updatedFoods = foodArray.filter(isNotId);
        this.setState({ foods: updatedFoods });
        // make delete request to the backend
        axios.delete(`/food/${id}`);
        // remove from local state
    }
    handleUpdate(id) {
        axios.put(`/food/${id}`).then((response) => {
            this.getFoods();
        });
    }

    render() {
        const foods = this.state.foods;
        console.log(foods);
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
                                            <th>Edit</th>
                                            <th>Delete</th>
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
                                                <td>
                                                    <Link
                                                        className="btn btn-primary btn-sm mb-3"
                                                        to={`/${foods[food].id}/edit`}
                                                    >
                                                        Edit
                                                    </Link>
                                                </td>
                                                <td>
                                                    <button
                                                        onClick={() =>
                                                            this.handleDelete(
                                                                foods[food].id
                                                            )
                                                        }
                                                        className="btn btn-sm btn-warning"
                                                    >
                                                        Delete
                                                    </button>
                                                    <Link
                                                        className="btn btn-primary btn-sm mb-3"
                                                        to="/foodDelete"
                                                    >
                                                        Delete
                                                    </Link>
                                                </td>
                                            </tr>
                                            //</Link>
                                        ))}
                                    </tbody>
                                </table>
                                <Link
                                    className="btn btn-primary btn-sm mb-3"
                                    to="/foodAdd"
                                >
                                    Create new food
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
