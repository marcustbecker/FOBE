import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import "../../../css/app.css";

export class RestaurantAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "",
            lat: "",
            lng: "",
            markers: [
                {
                    position: {},
                },
            ],
        };
        // bind
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onClick = this.onClick.bind(this);
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
    onClick(t, map, coord) {
        const { latLng } = coord;
        const lat = latLng.lat();
        const lng = latLng.lng();

        this.setState((previousState) => {
            return {
                markers: [
                    ...previousState.markers,
                    {
                        position: { lat, lng },
                    },
                ],
            };
        });
        console.log("marker:");
        console.log(this.state.markers);
        console.log("lat:");
        console.log(this.state.markers[1].position.lat);
        console.log("long:");
        console.log(this.state.markers[1].position.lng);
    }

    render() {
        const coords = this.state.markers;
        console.log("coords:");
        console.log(coords);
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
                                            placeholder="Latitude"
                                            value={this.state.lat}
                                            onChange={this.handleChange}
                                            required
                                        />
                                        <input
                                            name="lng"
                                            className="form-control"
                                            placeholder="Longitude"
                                            value={this.state.lng}
                                            onChange={this.handleChange}
                                            required
                                        />
                                        <div>
                                            Click the map the get your
                                            coordinates:
                                        </div>
                                        {Object.keys(coords).map((coord, i) => (
                                            <div key={coords[coord].id}>
                                                Marker:
                                                <span> {i}</span>
                                                <br />
                                                Latitude:
                                                <span>
                                                    {
                                                        this.state.markers[
                                                            coord
                                                        ].position.lat
                                                    }
                                                </span>
                                                <br />
                                                Longitude:
                                                <span>
                                                    {
                                                        this.state.markers[
                                                            coord
                                                        ].position.lng
                                                    }
                                                </span>
                                                <hr />
                                            </div>
                                        ))}

                                        <button
                                            type="submit"
                                            className="btn btn-primary rest-create"
                                        >
                                            Create Restaurant
                                        </button>
                                        <div>
                                            <Map
                                                google={this.props.google}
                                                zoom={11}
                                                onClick={this.onClick}
                                                style={{
                                                    width: "90%",
                                                    height: "400px",
                                                    margin:
                                                        "-400px 10px 10px 10px",
                                                }}
                                                initialCenter={{
                                                    lat: 41.755,
                                                    lng: -88.348,
                                                }}
                                            >
                                                {this.state.markers.map(
                                                    (marker, index) => (
                                                        <Marker
                                                            key={index}
                                                            title={index}
                                                            label={index}
                                                            name={index}
                                                            position={
                                                                marker.position
                                                            }
                                                        />
                                                    )
                                                )}
                                                <Marker
                                                    key={this.props.index}
                                                    title="Aurora Univerity"
                                                    label="Aurora University"
                                                    position={{
                                                        lat: 41.753,
                                                        lng: -88.3504,
                                                    }}
                                                />
                                            </Map>
                                        </div>
                                    </div>
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

export default GoogleApiWrapper({
    apiKey: "AIzaSyDJ36wKsOaueSQCGUEPc4-KVGEMf9STSAs",
})(RestaurantAdd);
