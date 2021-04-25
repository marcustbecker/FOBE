import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../css/app.css";

export class ShowFood extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foods: [],
            categories: [],
        };
    }

    componentDidMount() {
        axios
            .get("/userFood/" + this.props.match.params.id)
            .then((response) => {
                this.setState({
                    foods: response.data.food,
                });
                console.log(response);
            });
        axios
            .get("/category/" + this.props.match.params.id)
            .then((response) => {
                this.setState({
                    categories: response.data[0],
                });
                console.log(response);
            });
    }

    render() {
        const foods = this.state.foods;
        const categories = this.state.categories;
        return (
            <div className="container py-4">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                {categories.categoryName} foods
                            </div>
                            <div className="card-body">
                                <table
                                    className="table"
                                    data-filter-control="true"
                                    data-show-search-clear-button="true"
                                >
                                    <tbody>
                                        <tr>
                                            <th
                                                data-field="item name"
                                                data-filter-control="input"
                                            >
                                                Name
                                            </th>
                                            <th data-field="description">
                                                Description
                                            </th>
                                            <th data-field="price">Price</th>
                                            <th></th>
                                        </tr>
                                        {Object.keys(foods).map((food, i) => (
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
                                                        key={foods[food].res_id}
                                                        className="btn btn-primary"
                                                        to={`/mapView/${foods[food].res_id}`}
                                                    >
                                                        Choose
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
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

export default ShowFood;
