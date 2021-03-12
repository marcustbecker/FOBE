import axios from 'axios';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Restaurant extends Component{
    constructor(){
        super();
        this.state = {
            restaurants: []
        }
    }
    UNSAFE_componentWillMount(){
        axios.get('/api/restaurant').then(response => {
            this.setState({
                restaurants: response.data
            });
        }).catch(errors=> {
            console.log(errors);
        })
    }

    render(){
        return(
            <div className="container">
                {this.state.restaurants.map(restaurant => <li>{restaurant.body}</li>)}
            </div>
        );
    }
}


if (document.getElementById('fobe')) {
    ReactDOM.render(<Restaurant />, document.getElementById('fobe'));
}
