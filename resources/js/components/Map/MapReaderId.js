import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import axios from "axios";
import { auto } from "async";
import "../../../css/app.css";
import { matchesProperty } from "lodash";

export class MapReaderId extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        axios.get(`/map/` + this.props.match.params.id).then((res) => {
            console.log("res:");
            console.log(res);
            this.setState({
                data: res.data.data[0],
            });
        });
    }

    render() {
        const data = this.state.data;
        console.log("data:");
        console.log(data);
        return (
            <div>
                <div className="map-list-container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <h1 className="header">Restaurants</h1>
                            <div className="card">
                                <div className="card-header">
                                    <h3>{data.name}</h3>
                                </div>
                                <div className="card-body">
                                    <h5>Address:</h5>
                                    {data.address}
                                </div>
                            </div>
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
                        <Marker
                            title={data.name}
                            label={data.name}
                            position={{
                                lat: data.lat,
                                lng: data.lng,
                            }}
                        />
                    </Map>
                </div>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyDJ36wKsOaueSQCGUEPc4-KVGEMf9STSAs",
})(MapReaderId);
