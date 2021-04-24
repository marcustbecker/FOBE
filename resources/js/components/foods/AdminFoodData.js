import React from "react";
import { Link } from "react-router-dom";
import "../../../css/app.css";

class AdminFoodData extends React.Component {
    delFood = (id) => {
        alert("Are You Sure Want To Delete This Food?: " + id);
        this.props.deleteFood(id);
    };
    render() {
        const { foods } = this.props;
        return (
            <div className="container py-4">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card-header">All foods</div>

                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                                <tr>
                                    <td>{foods.foodName}</td>
                                    <td>{foods.foodDescription}</td>
                                    <td>{foods.foodPrice}</td>
                                    <td>
                                        <Link
                                            className="btn btn-primary"
                                            to={`/edit/${foods.id}`}
                                        >
                                            Edit
                                        </Link>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-primary"
                                            onClick={() =>
                                                this.delFood(foods.id)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminFoodData;
