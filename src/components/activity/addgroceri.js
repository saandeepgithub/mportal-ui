import React from "react";
import GrocessoryHomePage from "./grocessoryhomepage";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import ReactDom from "react-dom";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/cjs/Container";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";

class AddGroceri extends React.Component {

    state = {
        groceriName: '',
        quantity: ''
    }

    displayResponseAsAlert = (event, alertShow, alertMessage) => {
        return (
            <Alert variant={"success"} show={alertShow} onClick={this.closeAlert} dismissible={alertShow}>
                {alertMessage}
            </Alert>
        );
    }

    displaySpinner = (event, hiddenStatus) => {
        return (
            <Spinner animation="border" variant="primary" hidden={hiddenStatus}/>
        );
    }

    addGroceri = (event) => {
        ReactDom.render(this.displaySpinner(event, true), document.getElementById("spinner"));
        axios.post("http://localhost:3000/groceri/add", {
            groceriName: this.state.groceriName,
            quantity: this.state.quantity,
        }).then(res => {
            this.setState({"message": res.data.response})
            var alertMessage = "Groceri added sucessfully";
            ReactDom.render(this.displayResponseAsAlert(event, true, alertMessage), document.getElementById("smessage"));
        })
    }

    closeAlert = (event) => {
        ReactDom.render(this.displayResponseAsAlert(event, false, null), document.getElementById("smessage"));
    }

    fetchValues = (event) => {
        const groceriAttr = event.target.name;
        this.setState({[groceriAttr]: event.target.value});
    }

    render() {
        return <div>
            <GrocessoryHomePage/>
            <div id={"smessage"}></div>
            <div className='col-sm-10'>
                <Form.Group>
                    <Form.Label>Groceri Name</Form.Label>
                    <Form.Control placeholder="Groceri Name" name="groceriName" onChange={this.fetchValues}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control placeholder="qunatity" name="quantity" onChange={this.fetchValues}/>
                </Form.Group>
                <Button type='button' onClick={this.addGroceri}>Add Groceri</Button>
                <div id="spinner"></div>
            </div>
        </div>
    }

}

export default AddGroceri;
