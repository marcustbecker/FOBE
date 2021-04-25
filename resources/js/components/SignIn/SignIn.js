import React from "react";
import ErrorsService from "./../../ErrorsService";
import axios from "axios";
import "../../../css/app.css";
import { Redirect } from "react-router-dom";

export class SignIn extends React.Component {
    //state construct
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            errors: ErrorsService,
            loading: false,
        };
    }

    UNSAFE_componentWillMount() {
        this.state.errors.reset();
    }

    //On any change from text fields set state with input
    handlechange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });
    };

    //Submitting the form
    handlesubmit = (e) => {
        e.preventDefault();
        const url = "http://127.0.0.1:8000/login";
        //reset errors
        this.state.errors.reset();
        console.log(this.state);

        const data = {
            username: this.state.username,
            password: this.state.password,
        };
        //setting state loading true and sending data to controller
        this.setState({ loading: true });
        axios.post(url, data).then((res) => {

            switch (res.data.success) {
                //on success login statement sets token and sends user data
                case true:
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("users", res.data.user.isAdmin);
                    break;
                //on failed login statement outputs validator errors and error message
                case false:
                    this.state.errors.setErrors(res);
                    this.state.errors.setMessage(res);
                    console.log(this.state.errors.getErrors());
                    console.log(res);
                    break;
            }
            this.setState({ loading: false });
        });
    };

    render() {
        //if there is a token then redirect to dashboard
        const token = localStorage.getItem("token");
        if (token) {
            return <Redirect to="/dashboard" />;
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <form className="box" onSubmit={this.handlesubmit}>
                                <h1>Login</h1>
                                <p className="text-muted">
                                    {" "}
                                    Please enter your username and password!
                                </p>
                                {this.state.errors.getMessage() ? (
                                    <div className="validation-error">
                                        {this.state.errors.getMessage()}
                                    </div>
                                ) : null}

                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    onChange={this.handlechange}
                                />
                                {this.state.errors.getKey("username") ? (
                                    <div className="validation-error">
                                        {this.state.errors.getKey("username")}
                                    </div>
                                ) : null}

                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={this.handlechange}
                                />
                                {this.state.errors.getKey("password") ? (
                                    <div className="validation-error">
                                        {this.state.errors.getKey("password")}
                                    </div>
                                ) : null}

                                <input
                                    type="submit"
                                    name="login"
                                    value="Login"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;
