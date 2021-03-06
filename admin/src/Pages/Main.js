
import React from 'react';
import { BrowserRouter as Router, Route,Redirect} from "react-router-dom";
import Login from './Login'
import AdminIndex from './AdminIndex'
function Main(){
    return (
        <Router>   
            <Route exact path="/" render={() => (
                <Redirect to="/login/"/>
            )}/>   
            <Route path="/login/" exact component={Login} />
            <Route path = "/index/" exect component={AdminIndex}/>
        </Router>
    )
}
export default Main
