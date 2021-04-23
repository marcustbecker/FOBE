import axios from "axios";
import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import "../../../css/app.css";
//const { id } = useParams();

export default class RestaurantEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "",
            lat: "",
            lng: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        console.log("params.id:");
        console.log(this.props.match.params.id);
        let id = this.props.match.params.id;

        axios.get(`/restaurant/${id}`).then((response) => {
            console.log("restaurant response dataaa:");
            console.log(response.data);
            this.setState({
                name: response.data.name,
                address: response.data.address,
                lat: response.data.lat,
                lng: response.data.lng,
            });
        });
    }

    handleChange(e) {
        // this.setState({
        //     name: e.target.value,
        //     address: e.target.value,
        //     lat: e.target.value,
        //     long: e.target.value,
        // });
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit(e) {
        const { name, address, lat, lng } = this.state;
        e.preventDefault();
        const rest = {
            name: name,
            address: address,
            lat: lat,
            lng: lng,
        };
        let uri = "/restaurant/" + this.props.match.params.id;
        axios.patch(uri, rest).then((response) => {
            console.log("Updated to :");
            console.log(rest);
            // this.props.history.push("/categoryList");
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Update Restaurant</div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label>Restaurant Name</label>
                                        <input
                                            name="name"
                                            className="form-control"
                                            type="text"
                                            placeholder="Restaurant Name"
                                            value={this.state.name}
                                            onChange={this.handleChange}
                                        />
                                        <label>Address</label>
                                        <input
                                            name="address"
                                            className="form-control"
                                            type="text"
                                            placeholder="Address"
                                            value={this.state.address}
                                            onChange={this.handleChange}
                                        />
                                        <label>Latitude</label>
                                        <input
                                            name="lat"
                                            className="form-control"
                                            type="number"
                                            placeholder="Latitude"
                                            value={this.state.lat}
                                            onChange={this.handleChange}
                                        />
                                        <label>Longitude</label>
                                        <input
                                            name="lng"
                                            className="form-control"
                                            type="number"
                                            placeholder="Longitude"
                                            value={this.state.lng}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Update Restaurant
                                    </button>
                                    <Link
                                        to="/restaurantList"
                                        className="btn btn-primary"
                                    >
                                        Back
                                    </Link>
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
