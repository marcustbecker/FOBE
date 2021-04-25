import React from "react";
import ReactDOM from "react-dom";
import "./../../css/app.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from "react-router";
import SignIn from "./SignIn/SignIn";
import Register from "./Register/Register";
import LogOut from "./SignIn/LogOut";
import NavbarMenu from "./Navbar/NavbarMenu";
import AdminNavbarMenu from "./Navbar/AdminNavbarMenu";
import UserNavbarMenu from "./Navbar/UserNavbarManu";
import Dashboard from "./Dashboard/Dashboard";
import AdminHome from "./Admin/AdminHome";
import FoodList from "./Food/FoodList";
import FoodAdd from "./Food/FoodAdd";
import FoodEdit from "./Food/FoodEdit";
import CategoryList from "./Category/CategoryList";
import CategoryAdd from "./Category/CategoryAdd";
import CategoryEdit from "./Category/CategoryEdit";
import RestaurantList from "./Restaurant/RestaurantList";
import RestaurantAdd from "./Restaurant/RestaurantAdd";
import RestaurantEdit from "./Restaurant/RestaurantEdit";
import ShowFood from "./FoodUser/ShowFood";
import MapReaderId from "./Map/MapReaderId";
import MapReader from "./Map/MapReader";

const AdminRoute = ({ component, ...options }) => {
    const isAdmin = localStorage.getItem("users");
    console.log();
    if (isAdmin == 1) {
        return <Route {...options} component={component} />;
    } else if (isAdmin == 0) {
        return <Redirect to="/dashboard" />;
    } else if (!isAdmin) {
        return <Redirect to="/login" />;
    }
};

const UserRoute = ({ component, ...options }) => {
    const loggedIn = localStorage.getItem("token");
    console.log();
    if (loggedIn) {
        return <Route {...options} component={component} />;
    } else {
        return <Redirect to="/login" />;
    }
};

class App extends React.Component {
    render() {
        const isAdmin = localStorage.getItem("users");
        let button;
        if (isAdmin == 1) {
            button = <AdminNavbarMenu />;
        } else if (isAdmin == 0) {
            button = <UserNavbarMenu />;
        } else {
            button = <NavbarMenu />;
        }

        return (
            //Routing return navbar and switch case component
            <Router>
                <div className="App">{button}</div>
                <br />
                <Switch>
                    <Route path="/login" component={SignIn} />
                    <Route path="/register" component={Register} />
                    <Route path="/logout" component={LogOut} />

                    <Route path="/dashboard" component={Dashboard} />
                    <AdminRoute path="/adminHome" component={AdminHome} />

                    <AdminRoute path="/foodList" component={FoodList} />
                    <AdminRoute path="/foodAdd" component={FoodAdd} />
                    <AdminRoute path="/foodEdit/:id" component={FoodEdit} />

                    <AdminRoute path="/categoryList" component={CategoryList} />
                    <AdminRoute path="/categoryAdd" component={CategoryAdd} />
                    <AdminRoute
                        path="/categoryEdit/:id"
                        component={CategoryEdit}
                    />

                    <AdminRoute
                        path="/restaurantList"
                        component={RestaurantList}
                    />
                    <AdminRoute
                        path="/restaurantAdd"
                        component={RestaurantAdd}
                    />
                    <AdminRoute
                        path="/restaurantEdit/:id"
                        component={RestaurantEdit}
                    />

                    <UserRoute path="/mapper" component={MapReader} />
                    <UserRoute path="/mapView/:id" component={MapReaderId} />

                    <UserRoute path="/showFood/:id" component={ShowFood} />
                </Switch>
            </Router>
        );
    }
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
