import React from 'react';
import ReactDOM from 'react-dom';

function Fobe() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example React Component</div>

                        <div className="card-body">I'm an example REACT component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Fobe;

if (document.getElementById('fobe')) {
    ReactDOM.render(<Fobe />, document.getElementById('fobe'));
}
