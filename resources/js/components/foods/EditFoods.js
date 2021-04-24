import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class EditFoods extends React.Component {
    state = {
        foodName: "",
        categoryID: "",
        foodPrice: "",
        foodDescription: "",
    };

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    updateFood = async (e) => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const res = await axios.patch(`/food/${id}`, this.state);
        if (res.data.status === 200) {
            this.props.history.push("/AdminFoodList");
        }
    };
    async componentDidMount() {
        const id = this.props.match.params.id;
        const res = await axios.get(`/food/${id}/edit`);
        this.setState({ foodName: res.data.foods.foodName });
        this.setState({ categoryID: res.data.foods.categoryID });
        this.setState({ foodPrice: res.data.foods.foodPrice });
        this.setState({ foodDescription: res.data.foods.foodDescription });
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Create Food</div>
                            <form onSubmit={this.updateFood}>
                                <div className="form-group">
                                    <label>Food Name:</label>
                                    <input
                                        type="text"
                                        name="foodName"
                                        className="form-control"
                                        value={this.state.foodName}
                                        onChange={this.handleInput}
                                        placeholder="Enter the Food Name"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Food Category:</label>
                                    <select
                                        name="categoryID"
                                        className="form-control"
                                        value={this.state.categoryID}
                                        onChange={this.handleInput}
                                        required
                                    >
                                        <option value="1">Chinese</option>
                                        <option value="2">Italian</option>
                                        <option value="3">Polish</option>
                                        <option value="4">Mexican</option>
                                        <option value="5">American</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Price:</label>
                                    <textarea
                                        type="number"
                                        name="foodPrice"
                                        className="form-control"
                                        value={this.state.foodPrice}
                                        onChange={this.handleInput}
                                        placeholder="Price of food"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Description:</label>
                                    <textarea
                                        type="text"
                                        name="foodDescription"
                                        className="form-control"
                                        value={this.state.foodDescription}
                                        onChange={this.handleInput}
                                        placeholder="Write the description of the food"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Edit Food
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditFoods;
