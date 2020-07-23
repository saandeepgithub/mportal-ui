import React from "react";
import BillHomePage from "./billhomepage";
import Wallet from "../wallets/wallet";
import axios from "axios";
import payTmImg from "../../images/pt.png";

class Balance extends React.Component {

    state = {
        wallet: [],
        walletInfo: '',
    }

    componentDidMount() {
        axios.get("http://localhost:3000/wallet/all").then(res => {
            var wallet = res.data.response;
            Object.keys(wallet).map((key) => {
                this.state.wallet.push(<Wallet balance={wallet[key]} image_source={payTmImg}/>)
            })
            this.setState({walletInfo: this.state.wallet});
        });
    }

    render() {
        return <div>
            <div>
                <BillHomePage fixed="top"/>
                {this.state.walletInfo}
            </div>
        </div>
    }
}

export default Balance
