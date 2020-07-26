import React from "react";
import axios from "axios";
import GrocessoryHomePage from "./grocessoryhomepage";
import Grocessories from "./grocessories";

class PurchasedGroceri extends React.Component {

    state = {
        groceriName: '',
        quantity: '',
        groceriList: '',
        groceri: []
    }

    componentDidMount() {
        axios.get("http://localhost:3000/groceri/display/purchased").then(res => {
            var response = res.data.response;
            response.map(groceri => {
                this.state.groceri.push(<Grocessories groceriId={groceri.groceriId} grocessoryItem={groceri.groceriName}
                                                      quantity={groceri.quantity} variant="success" displayStatus={false}/>)
            });
            this.setState({groceriList: this.state.groceri});
        });
    }

    render() {
        return <div>
            <div>
                <GrocessoryHomePage reLoad={true}/>
                {this.state.groceriList}
            </div>
        </div>
    }
}

export default PurchasedGroceri;