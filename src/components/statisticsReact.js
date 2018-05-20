import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clockReact'


export default class StatisticsReact extends React.Component {


    constructor(args) {
        super(...args);
        this.state = {
            massages:  []
        };
    }

    changeMassage(newMassages){
        this.setState({massages:  newMassages});
    }

    render() {
        return(
            <div>
                <h2>Statistics:</h2>
                <Clock/>
                <h3>Game Statistics:</h3>
                {this.state.massages.map(this.eachMassage())}
            </div>
        );
    }

    eachMassage(msg) {
        return(
              <h3>{msg}</h3>
        );
    }
}