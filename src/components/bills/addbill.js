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
        axios.put("http://localhost:3000/bills/add",{
            billName: this.state.billName,
            billPaymentMode: this.state.paymentMode,
            billAmount: this.state.billAmount,
            cashBack: this.state.cashBack
        }).then(res =>{
            alert("Bill ID ::"+res.data.response);
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
                        <option value='ACT'>ACT_FIBER</option>
                        <option value='AMZ'>AMAZON</option>
                        <option value='DTH'>DTH</option>
                        <option value='GRO'>GROCESSORIES</option>
                        <option value='MED'>MEDICINES</option>
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
                    <Form.Label>Payment Mode</Form.Label>
                    <Form.Control as="select" name="paymentMode" onChange={this.fetchValues}>
                        <option value='#'>Select Payment Mode</option>
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
                    <Form.Label>Bill Amount</Form.Label>
                    <Form.Control placeholder="bill amount" name="billAmount" onChange={this.fetchValues} type="number"/>
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
