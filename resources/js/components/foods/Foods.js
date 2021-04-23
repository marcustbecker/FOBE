import React from "react";
import Axios from "axios";
import AdminFoodData from "./AdminFoodData";
import UserFoodData from "./UserFoodData";
import CreateFoods from "./CreateFoods";
import EditFoods from "./EditFoods";

class Foods extends React.Component {
    state = {
        foods: [],
        loading: true,
    };
    fetchFoods = async () => {
        const res = await Axios.get("/food");
        console.log(res.data);
        if (res.data.status === 200) {
            this.setState({ foods: res.data.foods });
            this.setState({ loading: false });
        }
    };
    componentDidMount() {
        this.fetchFoods();
    }

    deleteFood = async (id) => {
        const res = await Axios.delete(`/food/${id}`);
        if (res.data.status === 200) {
            this.fetchFoods();
        }
    };

    render() {
        if (this.state.loading) {
            return <h1>Loading....</h1>;
        }
        if (window.location.href === window.origin + "/adminFoodList") {
            return (
                <div>
                    {this.state.foods.map((foods) => (
                        <AdminFoodData
                            foods={foods}
                            key={foods.id}
                            deleteFood={this.deleteFood}
                        />
                    ))}
                </div>
            );
        } else if (window.location.href === window.origin + "/createFoods") {
            return (
                <div>
                    <CreateFoods />
                </div>
            );
        } else if (window.location.href === window.origin + "/edit/:id") {
            return (
                <div>
                    <EditFoods />
                </div>
            );
        } else {
            return (
                <div>
                    {this.state.foods.map((foods) => (
                        <UserFoodData foods={foods} key={foods.id} />
                    ))}
                </div>
            );
        }
    }
}

export default Foods;
