import React from "react";
import { Link } from "react-router-dom";
import Foods from "./Foods";
class UserFoodList extends React.Component {
    render() {
        return (
            <div className="container">
                <Foods />
            </div>
        );
    }
}

export default UserFoodList;
