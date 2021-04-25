import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import axios from "axios";
import RestaurantList from "../Restaurant/RestaurantList";

const mapStyles = {
    width: "40%",
    height: "50%",
};
export class MapReader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        axios.get(`/map`).then((res) => {
            console.log("res:");
            console.log(res);
            this.setState({
                data: res.data.data,
            });
        });
    }

    render() {
        const data = this.state.data;
        return (
            <div>
                <div className="map-list-container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <h1 className="header">Restaurants</h1>
                            {Object.keys(data).map((MapLocation, i) => (
                                <div className="card">
                                    <div className="card-header">
                                        <h3>{data[MapLocation].name}</h3>
                                    </div>
                                    <div className="card-body">
                                        <h5>Address:</h5>
                                        {data[MapLocation].address}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <Map
                        google={this.props.google}
                        zoom={11}
                        style={{
                            width: "70%",
                            margin: "0 0 0 auto",
                            height: "100%",
                        }}
                        initialCenter={{
                            lat: 41.755,
                            lng: -88.348,
                        }}
                    >
                        <Marker
                            key={this.props.index}
                            title="Aurora Univerity"
                            label="Aurora University"
                            position={{
                                lat: 41.753,
                                lng: -88.3504,
                            }}
                        />
                        {Object.keys(data).map((MapLocation, i) => (
                            <Marker
                                label={data[MapLocation].name}
                                title={data[MapLocation].name}
                                position={{
                                    lat: data[MapLocation].lat,
                                    lng: data[MapLocation].lng,
                                }}
                            />
                        ))}
                    </Map>
                </div>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyDJ36wKsOaueSQCGUEPc4-KVGEMf9STSAs",
})(MapReader);
