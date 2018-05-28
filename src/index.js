import React from 'react';
import ReactDOM from 'react-dom';
// import "./css/style.css";
import BoardComponent from './components/boardReact';
import Game from "./js/game";
import StateManagement from "./js/stateManagement";


/* Directly adding react element */
/*
ReactDOM.render(
    <BoardComponent game = {new Game()}/>,
    document.getElementById("root")
);
*/

ReactDOM.render(
    <BoardComponent game = {new Game()} manager = {new StateManagement()}/>,
    document.getElementById("root")
);
