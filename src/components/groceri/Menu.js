import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

class Menu extends React.Component {

    render() {
        return <div>
            <Container>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="/">m-portal</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="bills">Bills</Nav.Link>
                        <Nav.Link href="groceries">Groceries</Nav.Link>
                        <Nav.Link href="health">Health</Nav.Link>
                        <Nav.Link href="wallets">Wallets</Nav.Link>
                    </Nav>
                    <Button variant="outline-info">Search</Button>
                </Navbar>
            </Container>
        </div>
    }
}

export default Menu;
