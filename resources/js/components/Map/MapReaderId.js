import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import axios from 'axios';
import { auto } from 'async';

const mapStyles = {
    width: '40%',
    margin: '0 auto',
    height: '50%'
};
export class MapReader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        var data = '';
        axios.get(`/mapH/` + this.props.match.params.id).then((res) => {
            this.setState({
                data: res.data.data
            });
        });
    }

    render() {
        const data = this.state.data;
        return (
            <div className="container">
                <Map
                    google={this.props.google}
                    zoom={11}
                    style={mapStyles}
                    initialCenter={
                        {
                            lat: 41.7550,
                            lng: -88.3480
                        }
                    }
                >
                    {Object.keys(data).map((MapLocation, i) => (
                        <Marker
                            title={data[MapLocation].name}
                            position={
                                {
                                    lat: data[MapLocation].lat,
                                    lng: data[MapLocation].lng
                                }
                            } />
                    ))}
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDJ36wKsOaueSQCGUEPc4-KVGEMf9STSAs'
})(MapReader);
