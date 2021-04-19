// resources/assets/js/components/FoodList.js

import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class FoodList extends Component {
    constructor() {
        super();
        this.state = {
            foods: [],
        };
    }

    componentDidMount() {
        axios.get("/api/foods").then((response) => {
            this.setState({
                foods: response.data.foods,
            });
        });
    }

    render() {
        const foods = this.state;
        return (
            <div className="container py-4">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">All foods</div>
                            <div className="card-body">
                                <Link
                                    className="btn btn-primary btn-sm mb-3"
                                    to="/create"
                                >
                                    Create new food
                                </Link>
                                <ul className="list-group list-group-flush">
                                    {foods.map((food) => (
                                        <Link
                                            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                                            to={`/${food.id}`}
                                            key={food.id}
                                        >
                                            {food.name}
                                            <span className="badge badge-primary badge-pill">
                                                {food.tasks_count}
                                            </span>
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
