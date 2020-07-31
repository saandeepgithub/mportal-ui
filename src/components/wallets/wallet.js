import React from "react";

import {Card} from "react-bootstrap";

class Wallet extends React.Component {

    props = {
        balance: 0,
        image_source: ''
    };

    render() {
        return <div>
            <Card border="primary" style={{width: '6rem'}}>
                <Card.Img variant="top" src={this.props.image_source}/>
                <Card.Body>
                    <Card.Text>
                        {this.props.balance}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    }
}

export default Wallet
