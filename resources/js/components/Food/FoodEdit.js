import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../../css/app.css";

export default class FoodEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodName: "",
            categoryID: "",
            foodPrice: "",
            foodDescription: "",
            res_id: "",
            categories: [],
            restaurants: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        console.log("params.id:");
        console.log(this.props.match.params.id);
        let id = this.props.match.params.id;

        axios.get(`/food/${id}`).then((response) => {
            console.log("food response data:");
            console.log(response.data);
            this.setState({
                foodName: response.data.foodName,
                categoryID: response.data.categoryID,
                foodPrice: response.data.foodPrice,
                foodDescription: response.data.foodDescription,
                res_id: response.data.res_id,
            });
        });
        axios.get("/category").then((response) => {
            this.setState({
                categories: response.data.categories,
            });
        });
        axios.get("/restaurant").then((response) => {
            this.setState({
                restaurants: response.data.restaurants,
            });
        });
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit(e) {
        const {
            foodName,
            categoryID,
            foodPrice,
            foodDescription,
            res_id,
        } = this.state;
        e.preventDefault();
        const foo = {
            foodName: foodName,
            categoryID: categoryID,
            foodPrice: foodPrice,
            foodDescription: foodDescription,
            res_id: res_id,
        };
        let uri = "/food/" + this.props.match.params.id;
        axios.patch(uri, foo).then((response) => {
            console.log("Updated to :");
            console.log(response);
        });
    }

    render() {
        const categories = this.state.categories;
        const restaurants = this.state.restaurants;
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Update Food</div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label>Food Name</label>
                                        <input
                                            name="foodName"
                                            className="form-control"
                                            type="text"
                                            placeholder="Food Name"
                                            value={this.state.foodName}
                                            onChange={this.handleChange}
                                        />
                                        <label>Category</label>
                                        <select
                                            name="categoryID"
                                            className="form-control"
                                            value={this.state.categoryID}
                                            onChange={this.handleChange}
                                            required
                                        >
                                            {Object.keys(categories).map(
                                                (category, i) => (
                                                    <option
                                                        key={
                                                            categories[category]
                                                                .id
                                                        }
                                                        value={
                                                            categories[category]
                                                                .id
                                                        }
                                                    >
                                                        {
                                                            categories[category]
                                                                .categoryName
                                                        }
                                                    </option>
                                                )
                                            )}
                                        </select>
                                        <label>Restaurant</label>
                                        <select
                                            name="res_id"
                                            className="form-control"
                                            value={this.state.res_id}
                                            onChange={this.handleChange}
                                            required
                                        >
                                            {Object.keys(restaurants).map(
                                                (restaurant, i) => (
                                                    <option
                                                        key={
                                                            restaurants[
                                                                restaurant
                                                            ].id
                                                        }
                                                        value={
                                                            restaurants[
                                                                restaurant
                                                            ].id
                                                        }
                                                    >
                                                        {
                                                            restaurants[
                                                                restaurant
                                                            ].name
                                                        }
                                                    </option>
                                                )
                                            )}
                                        </select>
                                        <label>Price</label>
                                        <input
                                            name="foodPrice"
                                            className="form-control"
                                            type="number"
                                            placeholder="Food Price"
                                            value={this.state.foodPrice}
                                            onChange={this.handleChange}
                                        />
                                        <label>Description</label>
                                        <textarea
                                            name="foodDescription"
                                            className="form-control"
                                            rows="5"
                                            maxLength="255"
                                            placeholder="Food Description"
                                            value={this.state.foodDescription}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Update Food
                                    </button>
                                    <Link
                                        to="/foodList"
                                        className="btn btn-primary"
                                    >
                                        Back
                                    </Link>
                                </form>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
