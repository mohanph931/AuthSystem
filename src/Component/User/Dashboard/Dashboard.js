import React from 'react';
import { withRouter } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';
import axios from 'axios';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table'

class UserDashborad extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mealDetails:{},
            auth:true
        }
    }

    componentDidMount(){
        if(window.localStorage.getItem("token") && window.localStorage.getItem("token").length > 10){
            this.setState({
                auth : true
            })
        }else{
            this.setState({auth:false})
        }
    }
    
    render(){
        if(this.state.auth){
            return(
                <React.Fragment>
                    <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Hey {window.localStorage.getItem("name")}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>You are authenticated Successfully.</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={()=>{this.props.history.push('/')}} variant="secondary">Close</Button>
                    </Modal.Footer>
                    </Modal.Dialog>
                </React.Fragment>
            )
        }else{
            return(
                <React.Fragment>
                    <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Hey there</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>You are not authenticated to Visit this page. Please Login again.</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={()=>{window.localStorage.clear();this.props.history.push('/')}} variant="secondary">Close</Button>
                        <Button onClick={()=>{window.localStorage.clear();this.props.history.push('/login/User')}} variant="primary">Login</Button>
                    </Modal.Footer>
                    </Modal.Dialog>
                </React.Fragment>
            )
        }
    }
}

export default withRouter(UserDashborad);

