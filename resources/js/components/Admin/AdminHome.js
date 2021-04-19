import React from "react";
import "../../../css/app.css";

export class AdminHome extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="header">
                    <h1> Admin Home</h1>
                    <hr />
                </div>
                <div className="flex-container">
                    <div className="card">
                        <a href="/foodList">Foods</a>
                    </div>
                    <div className="card">
                        <a href="/categoryList">Food Types</a>
                    </div>
                    <div className="card">
                        <a href="/restaurantList">Restaurants</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminHome;
