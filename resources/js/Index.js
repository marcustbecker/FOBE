import React, { Component } from "react";
import ReactDOM from "react-dom";
import FoodAdd from "./components/FoodAdd";
import FoodList from "./components/FoodList";

export default class Index extends Component {
    render() {
        return (
            <div className="container">
                <FoodAdd />
                <FoodList />
            </div>
        );
    }
}

if (document.getElementById("foodAdd")) {
    ReactDOM.render(<FoodAdd />, document.getElementById("foodAdd"));
}

if (document.getElementById("foodList")) {
    ReactDOM.render(<FoodList />, document.getElementById("foodList"));
}
