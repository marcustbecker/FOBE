import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../../../css/app.css";

export default class RestaurantAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "",
            lat: "",
            lng: "",
        };
        // bind
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // handle change
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
        console.log(e.target.name);
    }

    handleSubmit(e) {
        const { name, address, lat, lng } = this.state;
        e.preventDefault();
        console.log("name : ", name);
        console.log("addy: ", address);
        console.log("lat : ", lat);
        console.log("long : ", lng);
        axios
            .post("/restaurant", {
                name: name,
                address: address,
                lat: lat,
                lng: lng,
            })
            .then((res) => {
                console.log("from handle submit", res);

                this.setState({
                    name: "",
                    address: "",
                    lat: "",
                    lng: "",
                });
            });
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Create Restaurant</div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <input
                                            name="name"
                                            className="form-control"
                                            type="text"
                                            placeholder="Restaurant Name"
                                            value={this.state.name}
                                            onChange={this.handleChange}
                                            required
                                        />
                                        <input
                                            name="address"
                                            className="form-control"
                                            type="text"
                                            placeholder="Address"
                                            value={this.state.address}
                                            onChange={this.handleChange}
                                            required
                                        />
                                        <input
                                            name="lat"
                                            className="form-control"
                                            type="number"
                                            placeholder="Latitude"
                                            value={this.state.lat}
                                            onChange={this.handleChange}
                                            required
                                        />
                                        <input
                                            name="lng"
                                            className="form-control"
                                            type="number"
                                            placeholder="Longitude"
                                            value={this.state.lng}
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Create Restaurant
                                    </button>
                                </form>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
