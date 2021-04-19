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
        };
        // bind
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // handle change
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
        console.log(e.target.name);
    }

    handleSubmit(e) {
        const { foodName, categoryID, foodPrice, foodDescription } = this.state;
        e.preventDefault();
        console.log("name : ", foodName);
        console.log("cat: ", categoryID);
        console.log("price : ", foodPrice);
        console.log("desc : ", foodDescription);
        axios
            .post("/food", {
                foodName: foodName,
                categoryID: categoryID,
                foodPrice: foodPrice,
                foodDescription: foodDescription,
                img_src: "img",
            })
            .then((res) => {
                console.log("from handle submit", res);

                this.setState({
                    foodName: "",
                    categoryID: "",
                    foodPrice: "",
                    foodDescription: "",
                });
            });
    }

    render() {
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
                                        <input
                                            name="categoryID"
                                            className="form-control"
                                            type="number"
                                            placeholder="Food Category"
                                            value={this.state.categoryID}
                                            onChange={this.handleChange}
                                            required
                                        />
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
