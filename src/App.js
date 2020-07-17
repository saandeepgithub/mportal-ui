import React from 'react';
import './App.css';
import Menu from "./components/Menu";
import AddBill from "./components/bills/addbill";
import EditBill from './components/bills/editbill'
import Balance from './components/bills/balance'
import Activity from './components/activity/activitypage'
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
    return (
        <Router>
            <Route path='/' component={Menu} exact={true}/>
            <Route path='/activites' component={Activity} exact={true}/>
            <Route path='/bills' component={AddBill} exact={true}/>
            <Route path='/bills/add' component={AddBill} exact={true}/>
            <Route path='/bills/view' component={EditBill} exact={true}/>
            <Route path='/bills/balance' component={Balance} exact={true}/>
        </Router>
    );
}

export default App;
