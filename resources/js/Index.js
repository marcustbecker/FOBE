import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Restaurant from './components/Restaurant';

export default class Index extends Component{
    render(){
        return(
            <div className="container">
                <Restaurant/>
            </div>
        );
    }
}


if (document.getElementById('fobe')) {
    ReactDOM.render(<Index />, document.getElementById('fobe'));
}
