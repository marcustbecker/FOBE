import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import axios from 'axios';

const mapStyles = {
  width: '50%',
  height: '55%'
};
export class MapReader extends Component {
  constructor(props){
    super(props);
    this.state={
      data: [],
      // latitude: 41.7550,
      // longitude: -88.3480,
      // latitude1: 41.751492,
      // longitude1: -88.334183,
      // latitude2: 41.751842,
      // longitude2: -88.333366,
      // latitude3:41.751953,
      // longitude3: -88.341957,
      // latitude4: 41.743916,
      // longitude4: -88.339432,
    }
  }


  componentDidMount(){
    var data = '';
    axios.get('/mapH').then((res)=>{
      this.setState({
        data: res.data.data,
      });
        // console.log(res.data);
        // console.log(res);
        // data = res.data;
        // this.setState({
        //   data: res.data
       

          //data: data.data,
          // data: res.data.data,
      
      
    });
  }

  render() {

    const data = this.state.data;

    return (
      <Map
      google={this.props.google}
        zoom={12}
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
        position= {
        {
          lat: data[MapLocation].lat,
          lng: data[MapLocation].lng
        }
         } />
      ))}
      
       
      {/* <Marker
      title={'Luigis Pizza and Fun Center'}
      position={
        {
          lat: this.state.latitude1, lng: this.state.longitude1
        }
    } />
    
     <Marker
    title={"La Michoacana Ice Cream"}
    position={
      {
        lat: this.state.latitude2, lng: this.state.longitude2
      }
    } />
    <Marker
    title={'Spartan House'}
    position={
      {
        lat: this.state.latitude3, lng: this.state.longitude3
      }
    } />
    <Marker
    title={'Papa Gs Famous Cheezzzy Beef Gyros & Ribs'}
    position={
      {
        lat: this.state.latitude4, lng: this.state.longitude4
      }
    } /> */}
    </Map> 
    
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDJ36wKsOaueSQCGUEPc4-KVGEMf9STSAs'
})(MapReader);
