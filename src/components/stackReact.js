import React from 'react';
import ReactDOM from 'react-dom';
import MANY_CLOSE_CARDS from './../Images/other/many_close_cards.png'
import FEW_CLOSE_CARDS from './../Images/other/few_close_cards.png'
import CLOSE_CARDS from './../Images/other/close_card.png'


export default class StackReact extends React.Component {


    constructor(args) {
        super(...args);
        this.state = {
            image:  MANY_CLOSE_CARDS
        };
    }

    changeImage(stackLength){
        let img = this.state.image;
        if (stackLength > 30) {
            img = MANY_CLOSE_CARDS;
        }
        else if (stackLength > 10) {
            img = FEW_CLOSE_CARDS;
        }
        else {
            img = CLOSE_CARDS;
        }
        this.setState({image:  img});
    }

    render() {
        return(
            <a onClick={this.handleClick}>
                <img src={this.state.image}/>
            </a>
        );
    }

    handleClick(ev) {
        ev.preventDefault();
        let changeColorReact = ReactDOM.findDOMNode(React.Component());
        if (changeColorReact.style.visibility === "visible")
            return false;

        if (!this.props.game.players[this.game.turn].isComputer())
            this.props.game.pullCardValidation(this.game.players[this.game.turn]);
    }
}