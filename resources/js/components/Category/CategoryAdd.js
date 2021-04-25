import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../../../css/app.css";

export default class FoodAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryName: "",
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
        const { categoryName } = this.state;
        e.preventDefault();
        console.log("name : ", categoryName);
        axios
            .post("/category", {
                categoryName: categoryName,
            })
            .then((res) => {
                console.log("from handle submit", res);

                this.setState({
                    categoryName: "",
                });
            });
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Create Category</div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <input
                                            name="categoryName"
                                            className="form-control"
                                            type="text"
                                            placeholder="Category Name"
                                            value={this.state.categoryName}
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        to="/categoryList"
                                    >
                                        Create Category
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
