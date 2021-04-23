import React from "react";
import { Link } from "react-router-dom";
import Foods from "./Foods";
class AdminFoodList extends React.Component {
    render() {
        return (
            <div className="container">
                <Foods />
            </div>
        );
    }
}

export default AdminFoodList;
