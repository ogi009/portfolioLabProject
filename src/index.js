import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './scss/index.scss';
import App from './App';
import '../src/scss/_main.scss';


ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
) , document.getElementById('root'));