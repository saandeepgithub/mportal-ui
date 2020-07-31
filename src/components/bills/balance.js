import React from "react";
import BillHomePage from "./billhomepage";
import Wallet from "../wallets/wallet";
import axios from "axios";
import AP from "../../images/AP.png";
import CH from "../../images/CH.png";
import GP from "../../images/GP.png";
import PP from "../../images/PP.png";
import PT from "../../images/PT.png";
import {PORTAL_URL} from "../consts";

class Balance extends React.Component {

    state = {
        wallet: [],
        walletInfo: '',
    }

    componentDidMount() {
        axios.get(PORTAL_URL + "/wallet/all").then(res => {
            var wallet = res.data.response;
            Object.keys(wallet).map((key) => {
                if(key=="AP"){
                    this.state.wallet.push(<Wallet balance={wallet[key]} image_source={AP}/>)
                }
                if(key=="CH"){
                    this.state.wallet.push(<Wallet balance={wallet[key]} image_source={CH}/>)
                }
                if(key=="GP"){
                    this.state.wallet.push(<Wallet balance={wallet[key]} image_source={GP}/>)
                }
                if(key=="PP"){
                    this.state.wallet.push(<Wallet balance={wallet[key]} image_source={PP}/>)
                }
                if(key=="PT"){
                    this.state.wallet.push(<Wallet balance={wallet[key]} image_source={PT}/>)
                }
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
