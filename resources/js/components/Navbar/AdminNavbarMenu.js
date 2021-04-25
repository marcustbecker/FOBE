import React from "react";
import "../../../css/app.css";
import { NavLink } from "react-router-dom";

export class AdminNavbarMenu extends React.Component {

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
                        <NavLink
                            activeClassName="navbar__link--active"
                            to="/logout"
                        >
                            LOGOUT
                    </NavLink>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default AdminNavbarMenu;