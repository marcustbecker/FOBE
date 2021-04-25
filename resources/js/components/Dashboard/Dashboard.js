import axios from "axios";
import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import "../../../css/app.css";

export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: {},
        };
    }

    componentDidMount() {
        axios.get("/getCategory").then((response) => {
            this.setState({
                category: response.data.categoryData,
                gotData: true,
            });
        });
    }

    handleSubmit(e) {}

    render() {
        const token = localStorage.getItem("token");
        if (!token) {
            return <Redirect to="/login" />;
        }

        if (!this.state.gotData) {
            return <h1 className="loading">LOADING</h1>;
        } else {
            const categories = this.state.category;
            console.log(categories);
            //id: {categories[category].id}
            console.log("Outputting data");
            return (
                <div className="container">
                    <div className="container-category">
                        <Link className="container-rest-item" to={`/mapper`}>
                            <div className="container-categories-text">
                                <h2>Show All Restaurants</h2>
                            </div>
                        </Link>
                        <div className="container-category-grid">
                            {Object.keys(categories).map((category, i) => (
                                <Link
                                    key={i}
                                    className="container-categories-item"
                                    to={`/showFood/${categories[category].id}`}
                                >
                                    <div className="container-categories-text">
                                        <h2>
                                            {categories[category].categoryName}
                                        </h2>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Dashboard;
