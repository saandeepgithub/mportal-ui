import React from "react";
import axios from "axios";
import GrocessoryHomePage from "./grocessoryhomepage";
import Grocessories from "./grocessories";

class AckGroceri extends React.Component {

    state = {
        groceriName: '',
        quantity: '',
        groceriList: '',
        groceri: [],
        reLoad: ''
    }

    loadGroceriHomePage=(event) =>{
        return (<GrocessoryHomePage reLoad={true}/>);
    }

    componentDidMount() {
        axios.get("http://localhost:3000/groceri/display/ack").then(res => {
            var response = res.data.response;
            response.map(groceri => {
                this.state.groceri.push(<Grocessories groceriId={groceri.groceriId} grocessoryItem={groceri.groceriName}
                                                      quantity={groceri.quantity} variant="primary" ack={true}
                                                      displayStatus={true}/>)
            });
            this.setState({groceriList: this.state.groceri});
        });
    }

    render() {
        return <div>
            <div>
                {this.loadGroceriHomePage()}
                {this.state.groceriList}
            </div>
        </div>
    }
}

export default AckGroceri;
