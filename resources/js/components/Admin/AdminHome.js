import React from "react";
import "../../../css/app.css";
import { Redirect, Link } from "react-router-dom";

export class AdminHome extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="container-category">
                    <div className="container-category-grid">
                        <Link
                            className="container-categories-item"
                            to="/foodList"
                        >
                            <div className="container-categories-text">
                                <h2>Foods</h2>
                            </div>
                        </Link>
                        <Link
                            className="container-categories-item"
                            to="/categoryList"
                        >
                            <div className="container-categories-text">
                                <h2>Food Types</h2>
                            </div>
                        </Link>
                        <Link
                            className="container-categories-item"
                            to="/restaurantList"
                        >
                            <div className="container-categories-text">
                                <h2>Restaurants</h2>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminHome;
