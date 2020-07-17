import React from "react";
import BillHomePage from "./billhomepage";
import Wallet from "../wallets/wallet";
import walletLogo from '../../paytm.png';

class Balance extends React.Component {

    render() {
        return <div>
            <BillHomePage/>
            <Wallet balance='1234' image_source={walletLogo}/>
            <Wallet balance='1234' image_source={walletLogo}/>
            <Wallet balance='1234' image_source={walletLogo}/>
            <Wallet balance='1234' image_source={walletLogo}/>
            <Wallet balance='1234' image_source={walletLogo}/>

        </div>
    }
}

export default Balance
