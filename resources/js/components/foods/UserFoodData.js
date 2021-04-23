import React from "react";

class UserFoodData extends React.Component {
    render() {
        const { foods } = this.props;
        return (
            <div className="container">
                <h2>{foods.foodName}</h2>
                <h6>{foods.categoryID}</h6>
                <p>{foods.foodDescription}</p>
                <hr />
            </div>
        );
    }
}

export default UserFoodData;
