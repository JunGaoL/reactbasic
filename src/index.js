import React from 'react';
import ReactDOM from 'react-dom';
import ControlPanel from './view/controlpanel';
import './index.css';

ReactDOM.render(
    <ControlPanel />, 
    document.getElementById('root')
    );
    
console.log('index')
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
