import React from "react";
import BillHomePage from "./billhomepage";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {PORTAL_URL} from "../consts";
import ReactDom from "react-dom";
import Alert from "react-bootstrap/Alert";


class EditBill extends React.Component {

    state = {
        searchBillId: '',
        billId: '',
        billAmount: '',
        billDate: '',
        cashBack: '',
        paymentMode: ''
    }

    fetchValues = (event) => {
        const billAttr = event.target.name;
        this.setState({[billAttr]: event.target.value});
    }

    searchBill = (event) => {
        axios.get(PORTAL_URL + "/bills/get/" + this.state.searchBillId)
            .then(res => {
                if (res.data.status == "FOUND") {
                    var response = res.data.response;
                    this.setState({"billId": response.billId});
                    this.setState({"billDate": response.billDate});
                    this.setState({"billAmount": response.billAmount});
                    this.setState({"cashBack": response.cashBack});
                    this.setState({"paymentMode": response.billPaymentMode});
                }
            })
            .catch(res => {
                this.setState({"billId": ''});
                this.setState({"billDate": ''});
                this.setState({"billAmount": ''});
                this.setState({"cashBack": ''});
                this.setState({"paymentMode": ''});
                alert("BILL ID NOT FOUND");
            });
    }

    saveBill = (event) => {
        axios.post(PORTAL_URL + "/bills/save", {
            billName: this.state.billName,
            billPaymentMode: this.state.paymentMode,
            billAmount: this.state.billAmount,
            cashBack: this.state.cashBack
        }).then(res => {
            alert("BILL UPDATED")
        })
    }

    render() {
        return <div>
            <BillHomePage/>
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline>
                        <Form.Control type="text" placeholder="BILL ID" className="mr-sm-2" name="searchBillId"
                                      onChange={this.fetchValues}/>
                        <Button onClick={this.searchBill}>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <div className='col-sm-10'>
                <Form.Group>
                    <Form.Label>BILL ID</Form.Label>
                    <Form.Control placeholder="BILL ID" name="billId" onChange={this.fetchValues}
                                  value={this.state.billId}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>BILL DATE</Form.Label>
                    <Form.Control placeholder="BILL DATE" name="billDate" onChange={this.fetchValues} type="date"
                                  value={this.state.billDate}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>BILL AMOUNT</Form.Label>
                    <Form.Control placeholder="BILL AMOUNT" name="billAmount" onChange={this.fetchValues}
                                  type="number" value={this.state.billAmount}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>CASHBACK</Form.Label>
                    <Form.Control placeholder="CASHBACK" name="cashBack" onChange={this.fetchValues}
                                  value={this.state.cashBack}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>PAYMENT MODE</Form.Label>
                    <Form.Control placeholder="PAYMENT MODE" name="paymentMode" onChange={this.fetchValues}
                                  value={this.state.paymentMode}/>
                </Form.Group>
                <Button type='button' onClick={this.saveBill} variant="success">save</Button>
            </div>
        </div>
    }
}

export default EditBill;
