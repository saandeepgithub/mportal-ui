import React from "react";
import BillHomePage from "./billhomepage";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"


class EditBill extends React.Component{



    render() {
        return <div>
            <BillHomePage/>
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline>
                        <Form.Control type="text" placeholder="Bill ID" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <div>

            </div>
        </div>
    }
}

export default EditBill;
