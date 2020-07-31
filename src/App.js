import React from 'react';
import './App.css';
import Menu from "./components/groceri/Menu";
import AddBill from "./components/bills/addbill";
import EditBill from './components/bills/vieweditbill'
import Balance from './components/bills/balance'
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddGroceri from "./components/groceri/addgroceri";
import PurchasedGroceri from "./components/groceri/purchasedgroceri";
import NewGroceries from "./components/groceri/newgroceries";
import AckGroceri from "./components/groceri/ackgroceri";
import SearchGroceri from "./components/groceri/searchgroceri";

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
                <Route path='/groceries/search' component={SearchGroceri} exact={true}/>
            </Router>
    );
}

export default App;
