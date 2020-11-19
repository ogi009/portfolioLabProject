import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Fundation1 from "./Fundation1";
import Fundation2 from "./Fundation2";

const Fundations = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Fundation1}/>
                <Route path='/Fundation1' component={Fundation1}/>
                <Route path='/Fundation2' component={Fundation2}/>
            </Switch>
            
        </main>
    );
};

export default Fundations;