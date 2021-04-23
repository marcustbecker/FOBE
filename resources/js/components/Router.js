import React from "react";
import ReactDOM from "react-dom";
import "./../../css/app.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignIn from "./SignIn/SignIn";
import Register from "./Register/Register";
import Dashboard from "./Dashboard/Dashboard";
import NavbarMenu from "./Navbar/NavbarMenu";
import FoodAdd from "./Food/FoodAdd";
import FoodList from "./Food/FoodList";
import AdminHome from "./Admin/AdminHome";
import MapReader from "./Map/MapReader";



function App() {
    return (
        //Routing return navbar and switch case component
        <Router>
            <div className="App">
                <NavbarMenu />
            </div>
            <Switch>
                <Route path="/login">
                    <SignIn />
                </Route>
                <Route path="/adminHome">
                    <AdminHome />
                </Route>
                <Route path="/foodAdd">
                    <FoodAdd />
                </Route>
                <Route path="/foodEdit">
                    <FoodAdd />
                </Route>
                <Route path="/foodList">
                    <FoodList />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
                
                <Route path="/map" component= {MapReader}/>
                
               
                    
                

                <Route path="/register">
                    <Register />
                </Route>
                
               
                

            </Switch>
        </Router>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
