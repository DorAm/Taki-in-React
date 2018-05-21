import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css";
import CardContainer from './Components/cardContainer' ;

/* Directly adding react element */
ReactDOM.render(
/*
    React.createElement('div',null, 'hello world testing 123'),
    document.getElementById("root")
*/

    <CardContainer />,
    document.getElementById("root")

);
