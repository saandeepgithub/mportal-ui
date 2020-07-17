import React from "react";

import {Card} from "react-bootstrap";

class Wallet extends React.Component {

    constructor(props) {
        super(props)
    }


    props = {
        balance: 0,
        image_source: ''
    };

    render() {
        return <div>
            <Card style={{width: '4rem'}}>
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
