import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

class Menu extends React.Component {

    render() {
        return <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">m-portal</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="bills" >Bills</Nav.Link>
                    <Nav.Link href="activites">Activites</Nav.Link>
                </Nav>
                <Button variant="outline-info">Search</Button>
            </Navbar>
        </div>
    }
}

export default Menu;
