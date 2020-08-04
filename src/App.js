import React from 'react';
import './App.css';
import Menu from "./components/groceri/Menu";
import AddBill from "./components/bills/addbill";
import EditBill from './components/bills/vieweditbill'
import Balance from './components/wallets/balance'
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddGroceri from "./components/groceri/addgroceri";
import PurchasedGroceri from "./components/groceri/purchasedgroceri";
import NewGroceries from "./components/groceri/newgroceries";
import AckGroceri from "./components/groceri/ackgroceri";
import SearchGroceri from "./components/groceri/searchgroceri";
import Health from "./components/health/health";
import Covid from "./components/covid/Covid";

function App() {
    return (
        <Router>
            <Route path='/' component={Menu} exact={true}/>
            <Route path='/groceries' component={NewGroceries} exact={true}/>
            <Route path='/bills' component={AddBill} exact={true}/>
            <Route path='/bills/add' component={AddBill} exact={true}/>
            <Route path='/bills/view' component={EditBill} exact={true}/>
            <Route path='/wallets' component={Balance} exact={true}/>
            <Route path='/groceries/add' component={AddGroceri} exact={true}/>
            <Route path='/groceries/ack' component={AckGroceri} exact={true}/>
            <Route path='/groceries/purchased' component={PurchasedGroceri} exact={true}/>
            <Route path='/groceries/search' component={SearchGroceri} exact={true}/>
            <Route path='/health' component={Health} exact={true}/>
            <Route path='/covid' component={Covid} exact={true}/>
        </Router>
    );
}

export default App;
