import React from "react";

class UserFoodData extends React.Component {
    render() {
        const { foods } = this.props;
        return (
            <div className="container">
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Food Name</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Choose</th>
                        </tr>
                        <tr>
                            <td>{foods.foodName}</td>
                            <td>{foods.categoryID}</td>
                            <td>{foods.foodDescription}</td>
                            <td>{foods.foodPrice}</td>
                            <td>
                                <button className="btn btn-primary" to="/">
                                    Choose {foods.foodName}
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default UserFoodData;
