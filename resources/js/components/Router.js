import React from "react";
import ReactDOM from "react-dom";
import "./../../css/app.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignIn from "./SignIn/SignIn";
import Register from "./Register/Register";
import Home from "./Home/Home";
import Dashboard from "./Dashboard/Dashboard";
import NavbarMenu from "./Navbar/NavbarMenu";
import AdminHome from "./Admin/AdminHome";
import FoodList from "./Food/FoodList";
import FoodAdd from "./Food/FoodAdd";
import FoodEdit from "./Food/FoodEdit";
import CategoryList from "./Category/categoryList";
import CategoryAdd from "./Category/categoryAdd";
import RestaurantList from "./Restaurant/restaurantList";
import RestaurantAdd from "./Restaurant/restaurantAdd";

import CreateFoods from "./foods/CreateFoods";
import EditFoods from "./foods/EditFoods";
import AdminFoodList from "./foods/AdminFoodList";
import UserFoodList from "./foods/UserFoodList";

function App() {
    return (
        //Routing return navbar and switch case component
        <Router>
            <div className="App">
                <NavbarMenu />
            </div>
            <Switch>
                <Route path="/login" component={SignIn} />
                <Route path="/adminHome" component={AdminHome} />
                <Route path="/foodList" component={FoodList} />
                <Route path="/foodAdd" component={FoodAdd} />
                <Route path="/:id/foodEdit" component={FoodEdit} />
                <Route path="/categoryList" component={CategoryList} />
                <Route path="/categoryAdd" component={CategoryAdd} />
                <Route path="/categoryEdit" />
                <Route path="/restaurantList" component={RestaurantList} />
                <Route path="/restaurantAdd" component={RestaurantAdd} />
                <Route path="/restaurantEdit" />
                <Route path="/register" component={Register} />

                <Route path="/" component={UserFoodList} />
                <Route path="/adminFoodList" component={AdminFoodList} />
                <Route path="/userFoodList" component={UserFoodList} />
                <Route path="/createFoods" component={CreateFoods} />
                <Route path="/edit/:id" component={EditFoods} />
            </Switch>
        </Router>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
