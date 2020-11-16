import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Route, Link} from "react-router-dom";
import Home from "./components/Home/Home";

const App = () => {
    return (
        <Router>
            <Route exact path={"/"} component={Home}/>
        </Router>

    );
};

export default App;

