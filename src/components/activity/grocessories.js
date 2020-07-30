import React from "react";
import Alert from "react-bootstrap/Alert"
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import GrocessoryHomePage from "./grocessoryhomepage";
import {PORTAL_URL} from "../consts";

class Grocessories extends React.Component {

    state = {
        displayModel: this.props.displayModel,
        ack: this.props.ack,
        purchase: this.props.purchase,
        variant: this.props.variant,
        groceriDisplay: true
    }
    props = {
        variant: '',
        grocessoryItem: '',
        groceriId: '',
        quantity: '',
        purchase: false,
        ack: false,
        displayModel: false,
        displayStatus: true
    }


    groceriModel = (event) => {
        if (this.props.displayStatus) {
            this.setState({displayModel: true});
        }
    }

    closeGroceriModel = (event) => {
        this.setState({displayModel: false});
    }

    ackGroceri = (event) => {
        axios.put(PORTAL_URL+"/groceri/ack/" + this.props.groceriId).then(res => {
            var ack = res.data.response;
            if (ack == 'Y') {
                this.setState({groceriDisplay: false})
                this.closeGroceriModel();
                GrocessoryHomePage.setState({reLoad: true})
            }
        });
    }

    purchaseGroceri = (event) => {
        axios.put(PORTAL_URL+"/groceri/purchase/" + this.props.groceriId).then(res => {
            var ack = res.data.response;
            if (ack == 'Y') {
                this.closeGroceriModel();
                this.setState({groceriDisplay: false})
            }
        });
    }

    render() {
        return <div className="col-sm-4">
            <Alert variant={this.state.variant} id={this.props.groceriId}
                   onClick={this.groceriModel}
                   hidden={!this.state.groceriDisplay}>{this.props.grocessoryItem} {this.props.quantity}</Alert>
            <div>
                <Modal show={this.state.displayModel}>
                    <Modal.Header>
                        <Modal.Title>Acknowledge</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.props.grocessoryItem}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.ackGroceri} hidden={this.state.ack}>
                            Acknowledge
                        </Button>
                        <Button variant="success" onClick={this.purchaseGroceri} hidden={this.state.purchase}>
                            Purchase
                        </Button>
                        <Button variant="danger" onClick={this.closeGroceriModel}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    }
}

export default Grocessories;
