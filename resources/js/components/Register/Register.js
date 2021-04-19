import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "../../../css/app.css";
import { Redirect } from "react-router-dom";
import ErrorsService from "../../ErrorsService";

export class Register extends React.Component {
    //Constructor to record register form inputs
    constructor(props) {
        super(props);
        this.state = {
            fname: null,
            lname: null,
            username: null,
            email: null,
            password: null,
            password_confirmation: null,
            errors: ErrorsService,
            loading: false,
        };
    }
    //on change inside text field set state
    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value,
        });
    };

    UNSAFE_componentWillMount() {
        this.state.errors.reset();
    }

    handlesubmit = async (e) => {
        e.preventDefault();
        const url = "http://127.0.0.1:8000/register";
        //reset errors
        this.state.errors.reset();

        //Sending data to /register route.
        const user = {
            fname: this.state.fname,
            lname: this.state.lname,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
        };
        //sets loading true and sends user data to controller
        this.setState({ loading: true });
        axios.post(url, user).then((res) => {
            switch (res.data.success) {
                //if registration is failed then statement sets errors in html
                case false:
                    console.log(res);
                    this.state.errors.setErrors(res);
                    this.state.errors.setMessage(res);
                    break;
                //if registration is success then statement sets token
                case true:
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("user", res.data.user);
                    break;
            }
            this.setState({ loading: false });
        });
    };

    render() {
        //Checks if token is already set, if it is then redirects user to dashboard.
        const token = localStorage.getItem("token");
        if (token) {
            return <Redirect to="/dashboard" />;
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <form onSubmit={this.handlesubmit} className="box">
                                <h1>Register</h1>
                                {this.state.errors.getMessage() ? (
                                    <div className="validation-error">
                                        {this.state.errors.getMessage()}
                                    </div>
                                ) : null}

                                <input
                                    type="text"
                                    name="fname"
                                    onChange={this.handleChange}
                                    placeholder="First Name"
                                />
                                {this.state.errors.getKey("fname") ? (
                                    <div className="validation-error">
                                        {this.state.errors.getKey("fname")}
                                    </div>
                                ) : null}

                                <input
                                    type="text"
                                    name="lname"
                                    onChange={this.handleChange}
                                    placeholder="Last Name"
                                />
                                {this.state.errors.getKey("lname") ? (
                                    <div className="validation-error">
                                        {this.state.errors.getKey("lname")}
                                    </div>
                                ) : null}

                                <input
                                    type="text"
                                    name="username"
                                    onChange={this.handleChange}
                                    placeholder="Username"
                                />
                                {this.state.errors.getKey("username") ? (
                                    <div className="validation-error">
                                        {this.state.errors.getKey("username")}
                                    </div>
                                ) : null}

                                <input
                                    type="text"
                                    name="email"
                                    onChange={this.handleChange}
                                    placeholder="E-mail"
                                />
                                {this.state.errors.getKey("email") ? (
                                    <div className="validation-error">
                                        {this.state.errors.getKey("email")}
                                    </div>
                                ) : null}

                                <input
                                    type="password"
                                    name="password"
                                    onChange={this.handleChange}
                                    placeholder="Password"
                                />
                                <input
                                    type="password"
                                    name="password_confirmation"
                                    onChange={this.handleChange}
                                    placeholder="Confirm Password"
                                />
                                {this.state.errors.getKey("password") ? (
                                    <div className="validation-error">
                                        {this.state.errors.getKey("password")}
                                    </div>
                                ) : null}

                                <input type="submit" name="" value="Register" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
