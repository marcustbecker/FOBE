import React from "react";
import "../../../css/app.css";
import { NavLink } from "react-router-dom";

export class NavbarMenu extends React.Component {
    render() {
        return (
            <nav className="navbar sticky-top navbar-custom">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <NavLink className="navbar-brand" to="/dashboard">
                            FOBE
                        </NavLink>
                        <NavLink className="navbar-brand" to="/adminHome">
                            Admin Home
                        </NavLink>
                        <NavLink className="navbar-brand" to="/foodList">
                            Foods
                        </NavLink>
                        <NavLink className="navbar-brand" to="/categoryList">
                            Categories
                        </NavLink>
                        <NavLink className="navbar-brand" to="/restaurantList">
                            Restaurants
                        </NavLink>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <NavLink
                                activeClassName="navbar__link--active"
                                to="/login"
                            >
                                LOGIN
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                activeClassName="navbar__link--active"
                                to="/register"
                            >
                                {" "}
                                REGISTER{" "}
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavbarMenu;
