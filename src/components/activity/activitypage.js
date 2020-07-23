import React, {Component} from "react";
import Menu from "../Menu";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class ActivityPage  extends React.Component{

    props ={
        fixed: ''
    }

    render() {
        return <div>
            <Navbar bg="dark" variant="dark" fixed={this.props.fixed}>
                <Navbar.Brand href="/bills">Bills</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/activity/Grocessories">Grocessories</Nav.Link>
                    <Nav.Link href="/activity/remainders">Remainders</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    }
}

export default ActivityPage
