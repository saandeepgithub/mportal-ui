import React from "react";
import BillHomePage from "./billhomepage";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

class AddBill extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            billId: ''
        }
    }

    genBillId = (event) => {
        alert("1");
        axios.get("http://localhost:8080/bills/allowed").then(res =>{
            this.setState({billId: res.data});
        })
        alert("value:"+this.state.billId)
    }

    render() {
        return <div>
            <BillHomePage/>
            <div className='col-sm-10'>
                <Form.Group>
                    <Form.Label>Bill Name</Form.Label>
                    <Form.Control as="select" onChange={this.genBillId}>
                        <option value='act'>ACT</option>
                        <option value='water'>WATER</option>
                        <option value='dth'>DTH</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Bill Id</Form.Label>
                    <Form.Control placeholder="Auto Generated Bill Id" disabled value={this.state.billId}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Payment Mode</Form.Label>
                    <Form.Control as="select">
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
                    <Form.Control placeholder="bill amount"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Cashback</Form.Label>
                    <Form.Control placeholder="cash back"/>
                </Form.Group>
                <Button type='button'>Add Bill</Button>
            </div>
        </div>
    }
}

export default AddBill
