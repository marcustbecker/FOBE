import React from "react";
import "../../../css/app.css";
import { Redirect } from "react-router-dom";

export class LogOut extends React.Component {

    render() {
        localStorage.clear();
        return (
            <Redirect to="/login" />
        )
    }
}

export default LogOut;