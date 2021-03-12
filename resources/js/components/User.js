import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DataTable from "./components/DataTable";

export default class User extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        const columns = ['id', 'username', 'fname', 'lname', 'email', 'address'];

        return (
            <div className="container">
                <DataTable url="/api/users" columns={columns} />
            </div>
        );
    }
}

if (document.getElementById('fobe')) {
    ReactDOM.render(<User />, document.getElementById('fobe'));
}
