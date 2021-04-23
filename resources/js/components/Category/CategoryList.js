import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../css/app.css";

export default class CategoryList extends Component {
    constructor() {
        super();
        this.state = {
            categories: [],
        };
    }

    componentDidMount() {
        axios.get("/category").then((response) => {
            this.setState({
                categories: response.data.categories,
            });
        });
    }

    render() {
        const categories = this.state.categories;
        console.log(categories);
        return (
            <div className="container py-4">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">All Categories</div>
                            <div className="card-body">
                                <Link
                                    className="btn btn-primary btn-sm mb-3"
                                    to="/categoryAdd"
                                >
                                    Create New Category
                                </Link>
                                <table className="table table-striped table-bordered table-hover">
                                    <tbody>
                                        <tr>
                                            <th>Name</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                        {Object.keys(categories).map(
                                            (category, i) => (
                                                <tr
                                                    key={
                                                        categories[category].id
                                                    }
                                                >
                                                    <td>
                                                        {
                                                            categories[category]
                                                                .categoryName
                                                        }
                                                    </td>

                                                    <td>
                                                        <Link
                                                            className="btn btn-primary btn-sm mb-3"
                                                            to={`/categoryEdit/${categories[category].id}`}
                                                        >
                                                            Edit
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        <Link
                                                            className="btn btn-primary btn-sm mb-3"
                                                            to="/categoryDelete"
                                                        >
                                                            Delete
                                                        </Link>
                                                    </td>
                                                </tr>
                                                //</Link>
                                            )
                                        )}
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
