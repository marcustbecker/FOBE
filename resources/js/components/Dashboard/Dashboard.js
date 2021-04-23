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
            console.log("inside willMount");
            console.log();
            console.log(response);
            console.log(this.state);
        });
    }

    handleSubmit(e) {

    }

    render() {
        console.log("Inside render");
        console.log(this.state);
        const token = localStorage.getItem("token");
        if (!token) {
            return <Redirect to="/login" />;
        }

        if (!this.state.gotData) {
            console.log("Loading");
            return <span>LOADING</span>;
        } else {
            const categories = this.state.category;
            console.log(categories);
            //id: {categories[category].id}
            console.log("Outputting data");
            return (
                <div className="container">
                    <div className="container-category">
                        <div className="container-category-grid">
                            {Object.keys(categories).map((category, i) => (
                                <Link
                                    key={i}
                                    className="container-categories-item"
                                    to={`/food/${categories[category].id}`}
                                >
                                    <div className=".container-categories-text">
                                        {categories[category].categoryName}
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
