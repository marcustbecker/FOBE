import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'

export default class Index extends Component{
    render(){
        return(
            <div className="container">
                <App/>
            </div>
        );
    }
}


if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
