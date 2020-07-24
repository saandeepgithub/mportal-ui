import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class GrocessoryHomePage extends React.Component {

    props ={
        fixed:''
    }

    render() {
        return <div>
            <Navbar bg="dark" variant="dark" fixed={this.props.fixed}>
                <Navbar.Brand href="/bills">Bills</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/groceries/add">Add Grocessories</Nav.Link>
                    <Nav.Link href="/groceries">New Grocessories</Nav.Link>
                    <Nav.Link href="/groceries/ack">Ack Grocessories</Nav.Link>
                    <Nav.Link href="/groceries/purchased">Purchased Grocessories</Nav.Link>
                    <Nav.Link href="/groceries/search">Search Grocessories</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    }
}

export default GrocessoryHomePage;
