import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Organization1 from "./Organization1";
import Organization2 from "./Organization2";
import Organization3 from "./Organization3";

const Organizations = () => {
    return (
            <main>
                <Switch>
                    <Route exact path='/' component={Organization1}/>
                    <Route path='/Organization1' component={Organization1}/>
                    <Route path='/Organization2' component={Organization2}/>
                    <Route path='/Organization3' component={Organization3}/>
                </Switch>

            </main>
    );
};

export default Organizations;