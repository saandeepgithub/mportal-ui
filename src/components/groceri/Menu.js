import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Menu extends React.Component {

    render() {
        return <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Nav className="mr-auto">
                    <Nav.Link href="bills">Bills</Nav.Link>
                    <Nav.Link href="groceries">Groceries</Nav.Link>
                    <Nav.Link href="health">Health</Nav.Link>
                    <Nav.Link href="wallets">Wallets</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    }
}

export default Menu;
