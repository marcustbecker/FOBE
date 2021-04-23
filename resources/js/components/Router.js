import React from "react";
import ReactDOM from "react-dom";
import "./../../css/app.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignIn from "./SignIn/SignIn";
import Register from "./Register/Register";
import Home from "./Home/Home";
import Dashboard from "./Dashboard/Dashboard";
import NavbarMenu from "./Navbar/NavbarMenu";
import FoodAdd from "./Food/FoodAdd";
import FoodList from "./Food/FoodList";
import AdminHome from "./Admin/AdminHome";
import ShowFood from "./FoodUser/ShowFood";


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
        <Route path="/foodEdit" />
        <Route path="/food/:id" component={ShowFood} />
        <Route path="/categoryList" component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/register" component={Register} />
        <Route path="/" component={Home} exact />
      </Switch>
    </Router>
  );
}

export default App;

if (document.getElementById("app")) {
  ReactDOM.render(<App />, document.getElementById("app"));
}
