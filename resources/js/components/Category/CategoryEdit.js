import axios from "axios";
import React, { Component } from "react";
import { useParams } from "react-router-dom";
import "../../../css/app.css";
//const { id } = useParams();

export default class CategoryEdit extends Component {
    constructor(props) {
        super(props);
        this.state = { categoryName: "" };
        this.nameChange = this.nameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        console.log("params.id:");
        console.log(this.props.match.params.id);
        let id = this.props.match.params.id;
        // console.log("id:");
        //console.log(id);

        //window.location.href === window.origin
        axios.get(`/category/${id}`).then((response) => {
            console.log("response data cat name:");
            console.log(response.data.categoryName);
            this.setState({
                categoryName: response.data.categoryName,
            });
        });
    }

    nameChange(e) {
        this.setState({ categoryName: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const cat = { categoryName: this.state.categoryName };
        let uri = "/category/" + this.props.match.params.id;
        axios.patch(uri, cat).then((response) => {
            this.props.history.push("/");
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Update Category</div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label>Category Name</label>
                                        <input
                                            name="categoryName"
                                            className="form-control"
                                            type="text"
                                            value={this.state.categoryName}
                                            onChange={this.nameChange}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Update Category
                                    </button>
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
