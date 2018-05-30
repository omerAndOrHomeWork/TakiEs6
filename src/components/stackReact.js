import React from 'react';
import ReactDOM from 'react-dom';
import MANY_CLOSE_CARDS from './../Images/other/many_close_cards.png'
import FEW_CLOSE_CARDS from './../Images/other/few_close_cards.png'
import CLOSE_CARDS from './../Images/other/close_card.png'
import {enumCard} from './../js/enumCard'

export default class StackReact extends React.Component {
    constructor(args) {
        super(...args);
        this.handleClick = this.handleClick.bind(this);
        this.dragStart = this.dragStart.bind(this);
    }

    render() {
        return(
            <a onClick={this.handleClick} id = {"stockCards"}>
                <img draggable={false} src={this.props.img}/>
            </a>
        );
    }

    handleClick(ev) {
        if(this.props.interactive === false)
            return false;
        ev.preventDefault();
        let changeColorReact = this.props.pickColorRef.current;
        if (changeColorReact.props.visible === "visible")
            return false;
        if (!this.props.game.players[this.props.game.turn].isComputer())
            this.props.game.pullCardValidation(this.props.game.players[this.props.game.turn]);
        else{
            this.props.game.renderError(enumCard.enumErrors.PULL_CARD_NOT_IN_TURN);
        }
    }

    dragStart(ev) {
         return false;
    }
}