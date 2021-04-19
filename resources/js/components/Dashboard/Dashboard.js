import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "../../../css/app.css";

export class Dashboard extends Component {
    render() {
        const token = localStorage.getItem("token");
        if (!token) {
            return <Redirect to="/login" />;
        }
        return <div className="container"></div>;
    }
}

export default Dashboard;
