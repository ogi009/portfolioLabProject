import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LogIn from "../LogIn/LogIn";
import Register from "../Register/Register";
import Home from "../Home/Home";
import LogOut from "../Logout/LogOut";


const Main = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/LogIn' component={LogIn}/>
                <Route path='/register' component={Register}/>
                <Route path='/LogOut' component={LogOut}/>
            </Switch>
        </>
    );
};

export default Main;