import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../../../css/app.css";

export default class FoodAdd extends Component {
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
    // handle change
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
        console.log(e.target.name);
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
        console.log("name : ", foodName);
        console.log("cat: ", categoryID);
        console.log("price : ", foodPrice);
        console.log("desc : ", foodDescription);
        console.log("resID : ", res_id);
        axios
            .post("/food", {
                foodName: foodName,
                categoryID: categoryID,
                foodPrice: foodPrice,
                foodDescription: foodDescription,
                res_id: res_id,
                img_src: "img",
            })
            .then((res) => {
                console.log("from handle submit", res);

                this.setState({
                    foodName: "",
                    categoryID: "",
                    foodPrice: "",
                    foodDescription: "",
                    res_id: "",
                });
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
                            <div className="card-header">Create Food</div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <input
                                            name="foodName"
                                            className="form-control"
                                            type="text"
                                            placeholder="Food Name"
                                            value={this.state.foodName}
                                            onChange={this.handleChange}
                                            required
                                        />
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

                                        <input
                                            name="foodPrice"
                                            className="form-control"
                                            type="number"
                                            placeholder="Food Price"
                                            value={this.state.foodPrice}
                                            onChange={this.handleChange}
                                            required
                                        />
                                        <textarea
                                            name="foodDescription"
                                            className="form-control"
                                            rows="5"
                                            maxLength="255"
                                            placeholder="Food Description"
                                            value={this.state.foodDescription}
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Create Food
                                    </button>
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
