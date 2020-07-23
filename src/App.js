import React from 'react';
import './App.css';
import Menu from "./components/Menu";
import AddBill from "./components/bills/addbill";
import EditBill from './components/bills/editbill'
import Balance from './components/bills/balance'
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddGroceri from "./components/activity/addgroceri";
import PurchasedGroceri from "./components/activity/purchasedgroceri";
import NewGroceries from "./components/activity/newgroceries";
import AckGroceri from "./components/activity/ackgroceri";

function App() {
    return (
        <Router>
            <Route path='/' component={Menu} exact={true}/>
            <Route path='/groceries' component={NewGroceries} exact={true}/>
            <Route path='/bills' component={AddBill} exact={true}/>
            <Route path='/bills/add' component={AddBill} exact={true}/>
            <Route path='/bills/view' component={EditBill} exact={true}/>
            <Route path='/bills/balance' component={Balance} exact={true}/>
            <Route path='/groceries/add' component={AddGroceri} exact={true}/>
            <Route path='/groceries/ack' component={AckGroceri} exact={true}/>
            <Route path='/groceries/purchased' component={PurchasedGroceri} exact={true}/>
        </Router>
    );
}

export default App;
