import React from "react";
import BillHomePage from "./billhomepage";
import Card from "react-bootstrap/Card";

class Wallets extends React.Component{

    render() {
        return <div>
            <BillHomePage/>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./paytm.png" />
                <Card.Body>
                    <Card.Text>
                       123.0
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    }
}

export default Wallets
