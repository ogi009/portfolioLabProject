import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LogIn from "../LogIn/LogIn";
import Register from "../Register/Register";
import Home from "../Home/Home";


const Main = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/LogIn' component={LogIn}/>
                <Route path='/register' component={Register}/>
            </Switch>
        </>
    );
};

export default Main;