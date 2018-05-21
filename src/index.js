import React from 'react';
import ReactDOM from 'react-dom';
// import "./css/style.css";
import BoardComponent from './components/boardReact';
import Game from "./js/game";


/* Directly adding react element */
ReactDOM.render(
    <BoardComponent game = {new Game()}/>,
    document.getElementById("root")
);
