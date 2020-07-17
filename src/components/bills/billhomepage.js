import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class BillHomePage  extends React.Component{

    render() {
        return <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/activites">Activites</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/bills/add">Add Bill</Nav.Link>
                    <Nav.Link href="/bills/view">View Bill</Nav.Link>
                    <Nav.Link href="/bills/balance">Balance</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    }
}

export default BillHomePage;
