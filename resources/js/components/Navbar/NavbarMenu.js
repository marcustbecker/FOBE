import React from 'react';
import "./Navbar.css";
import {NavLink} from 'react-router-dom';

export class NavbarMenu extends React.Component {
        
    render() {

        return (
    
            <nav className="navbar sticky-top navbar-custom">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <NavLink className="navbar-brand" to="/dashboard">FOBE</NavLink>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li><NavLink activeClassName="navbar__link--active" to="/login">LOGIN</NavLink></li>
                        <li><NavLink activeClassName="navbar__link--active" to="/register"> REGISTER </NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavbarMenu;