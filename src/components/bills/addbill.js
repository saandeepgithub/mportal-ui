import React from "react";
import ReactDom from "react-dom";
import BillHomePage from "./billhomepage";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import {PORTAL_URL} from "../consts";

class AddBill extends React.Component {

    state = {
        billName: '',
        paymentMode: '',
        billAmount: 0,
        cashBack: 0,
        message: '',
        billDate: '',
        spinnerDisplay: true
    }

    fetchValues = (event) => {
        const billAttr = event.target.name;
        this.setState({[billAttr]: event.target.value});
    }

    displaySpinner = (event, hiddenStatus) => {
        return (
            <Spinner animation="border" variant="primary" hidden={hiddenStatus}/>
        );
    }

    displayResponseAsAlert = (event, alertShow, alertMessage) => {
        return (
            <Alert variant={"success"} show={alertShow} onClick={this.closeAlert} dismissible={alertShow}>
                {alertMessage}
            </Alert>
        );
    }

    saveBill = (event) => {
        ReactDom.render(this.displaySpinner(event, true), document.getElementById("spinner"));
        this.setState({"spinnerDisplay": false});
        axios.put(PORTAL_URL + "/bills/add", {
            billName: this.state.billName,
            billPaymentMode: this.state.paymentMode,
            billAmount: this.state.billAmount,
            cashBack: this.state.cashBack,
            billDate: this.state.billDate
        }).then(res => {
            this.setState({"message": res.data.response})
            var alertMessage = "Bill added with Id " + this.state.message;
            this.setState({"spinnerDisplay": true});
            ReactDom.render(this.displayResponseAsAlert(event, true, alertMessage), document.getElementById("smessage"));
        })
        this.setState({"spinnerDisplay": true});
    }

    closeAlert = (event) => {
        ReactDom.render(this.displayResponseAsAlert(event, false, null), document.getElementById("smessage"));
    }

    render() {
        return <div>
            <BillHomePage/>
            <div id={"smessage"}></div>
            <div className='col-sm-10'>
                <Form.Group>
                    <Form.Label>BILL NAME</Form.Label>
                    <Form.Control as="select" onChange={this.fetchValues} name="billName">
                        <option value='#'>SELECT BILL</option>
                        <option value='ACT'>ACT_FIBER</option>
                        <option value='AMZ'>AMAZON</option>
                        <option value='DTH'>DTH</option>
                        <option value='GRO'>GROCESSORIES</option>
                        <option value='MED'>MEDICINES</option>
                        <option value='MLK'>MILK</option>
                        <option value='MR'>MOBILE_RECHARGE</option>
                        <option value='NV'>NON-VEG</option>
                        <option value='PTL'>PETROL</option>
                        <option value='CB1'>POWER_BILL_FLOOR-1</option>
                        <option value='CB21'>POWER_BILL_FLOOR-2-1</option>
                        <option value='CB22'>POWER_BILL_FLOOR-2-2</option>
                        <option value='CB3'>POWER_BILL_FLOOR-3</option>
                        <option value='VEG'>VEGETABLES</option>
                        <option value='WB'>WATER-BILL</option>
                        <option value='ZZZ'>OTHERS</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>PAYMENT MODE</Form.Label>
                    <Form.Control as="select" name="paymentMode" onChange={this.fetchValues}>
                        <option value='#'>SELECT PAYMENT MODE</option>
                        <option value='AP'>Amazon Pay</option>
                        <option value='CH'>Cash</option>
                        <option value='CB'>Cash Back</option>
                        <option value='CC'>Credit Card</option>
                        <option value='DC'>Debit Card</option>
                        <option value='GP'>Google Pay</option>
                        <option value='PT'>PayTM</option>
                        <option value='PP'>Phone Pay</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>BILL AMOUNT</Form.Label>
                    <Form.Control placeholder="BILL AMOUNT" name="billAmount" onChange={this.fetchValues}
                                  type="number"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>CASHBACK</Form.Label>
                    <Form.Control placeholder="CASHBACK" name="cashBack" onChange={this.fetchValues}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>BILL DATE</Form.Label>
                    <Form.Control placeholder="BILL DATE" name="billDate" onChange={this.fetchValues} type="date"/>
                </Form.Group>
                <Button type='button' onClick={this.saveBill}>Add Bill</Button>
                <Button type='reset'>reset</Button>
                <div id="spinner" hidden={this.state.spinnerDisplay}>
                    <Spinner animation="border" variant="secondary"/>
                </div>
            </div>
        </div>
    }
}

export default AddBill
