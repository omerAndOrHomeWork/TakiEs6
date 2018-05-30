import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clockReact'


export default class StatisticsReact extends React.Component {
    constructor(args) {
        super(...args);
    }

    render() {
        return(
            <div id = {"statistics"}>
                <h2>Statistics:</h2>
{/*
                {<Clock/>}
*/}
                <h3>Game Statistics:</h3>
                {this.props.msg.map(this.eachMassage)}
            </div>
        );
    }

    eachMassage(msg, i) {
        return(
            <p key={i}>{msg}</p>
        );
    }
}