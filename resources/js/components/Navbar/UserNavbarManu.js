import React from "react";
import "../../../css/app.css";
import { NavLink } from "react-router-dom";

export class UserNavbarMenu extends React.Component {
    render() {
        return (
            <nav className="navbar sticky-top navbar-custom">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <NavLink className="navbar-brand" to="/dashboard">
                            FOBE
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
        );
    }
}

export default UserNavbarMenu;
