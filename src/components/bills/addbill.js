import React from "react";
import BillHomePage from "./billhomepage";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

class AddBill extends React.Component {

       state = {
            billName: '',
            paymentMode: '',
            billAmount: 0,
            cashBack: 0
        }

        fetchValues =(event)=>{
           const billAttr=event.target.name;
           this.setState({[billAttr]: event.target.value});
        }

    genBillId = (event) => {
        const bill = {
            billName: this.state.billName,
            billPaymentMode: this.state.paymentMode,
            billAmount: this.state.billAmount,
            cashBack: this.state.cashBack
        }
        axios.put("http://localhost:3000/bills/add",{bill}).then(response =>{
            alert("Bill ID ::"+response.response);
        })
    }

    render() {
        return <div>
            <BillHomePage/>
            <div className='col-sm-10'>
                <Form.Group>
                    <Form.Label>Bill Name</Form.Label>
                    <Form.Control as="select" onChange={this.fetchValues} name="billName">
                        <option value='#'>Select Bill</option>
                        <option value='act'>ACT</option>
                        <option value='water'>WATER</option>
                        <option value='dth'>DTH</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Payment Mode</Form.Label>
                    <Form.Control as="select" name="paymentMode" onChange={this.fetchValues}>
                        <option value='#'>Select Payment Mode</option>
                        <option value='ap'>Amazon Pay</option>
                        <option value='ch'>Cash</option>
                        <option value='cb'>Cash Back</option>
                        <option value='db'>Credit Card</option>
                        <option value='cc'>Debit Card</option>
                        <option value='gp'>Google Pay</option>
                        <option value='pt'>PayTM</option>
                        <option value='pp'>Phone Pay</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Bill Amount</Form.Label>
                    <Form.Control placeholder="bill amount" name="billAmount" onChange={this.fetchValues}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Cashback</Form.Label>
                    <Form.Control placeholder="cash back" name="cashBack" onChange={this.fetchValues}/>
                </Form.Group>
                <Button type='button' onClick={this.genBillId}>Add Bill</Button>
            </div>
        </div>
    }
}

export default AddBill
