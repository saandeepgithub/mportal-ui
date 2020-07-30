import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import axios from "axios";
import Badge from "react-bootstrap/Badge";
import {PORTAL_URL} from "../consts";

class GrocessoryHomePage extends React.Component {

    state = {
        newCount: '',
        ackCount: '',
        purchaseCount: '',
        reLoad: this.props.reLoad
    }

    props = {
        fixed: '',
        reLoad: true
    }

    getNotificationCount = (event) => {
        axios.get(PORTAL_URL+"/groceri/new/count").then(res => {
            var newCount = res.data.response;
            this.setState({newCount: newCount});
        });

        axios.get(PORTAL_URL+"/groceri/ack/count").then(res => {
            var ackCount = res.data.response;
            this.setState({ackCount: ackCount});
        });

        axios.get(PORTAL_URL+"/groceri/purchase/count").then(res => {
            var purchaseCount = res.data.response;
            this.setState({purchaseCount: purchaseCount});
        });
    }

    componentDidMount() {
        this.getNotificationCount();
    }

    render() {
        if (this.state.reLoad) {
            return <div>
                <Navbar bg="dark" variant="dark" fixed={this.props.fixed}>
                    <Navbar.Brand href="/bills">Bills</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/groceries/add">Add Grocessories</Nav.Link>
                        <Nav.Link href="/groceries">New Grocessories <Badge
                            variant="danger">{this.state.newCount}</Badge>
                        </Nav.Link>
                        <Nav.Link href="/groceries/ack">Ack Grocessories <Badge
                            variant="primary">{this.state.ackCount}</Badge></Nav.Link>
                        <Nav.Link href="/groceries/purchased">Purchased Grocessories <Badge
                            variant="success">{this.state.purchaseCount}</Badge></Nav.Link>
                        <Nav.Link href="/groceries/search">Search Grocessories</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        }
    }
}

export default GrocessoryHomePage;
