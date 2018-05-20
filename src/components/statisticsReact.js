import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clockReact'


export default class StatisticsReact extends React.Component {


    constructor(args) {
        super(...args);
        this.state = {
            massages:  undefined
        };
        this.changeMassage = this.changeMassage.bind(this);
        // this.eachMassage = this.eachMassage.bind(this);

    }

    changeMassage(newMassages){
        //TODO: OMER WILL ASK OFER HOW TODO
        this.setState({massages : newMassages});

    }

    renderWithoutCard(){
        return(
            <div>
            </div>
        );
    }

    renderWithCard() {
        return(
            <div>
                <h2>Statistics:</h2>
                <Clock/>
                <h3>Game Statistics:</h3>
                    {this.state.massages.map(this.eachMassage)}
            </div>
        );
    }

    render() {
        if(this.state.massages === undefined)
            return this.renderWithoutCard();
        else
            return this.renderWithCard();
    }

    eachMassage(msg, i) {
        return(
              <h3 key={i}>{msg}</h3>
        );
    }
}