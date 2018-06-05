import React from 'react';
import ReactDOM from 'react-dom';
import BoardComponent from './components/boardReact';
import Game from "./js/game";
import StateManagement from "./js/stateManagement";


ReactDOM.render(
    <BoardComponent game = {new Game()} manager = {new StateManagement()}/>,
    document.getElementById("root")
);
