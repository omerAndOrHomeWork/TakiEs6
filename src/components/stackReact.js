import React from 'react';
import ReactDOM from 'react-dom';
import MANY_CLOSE_CARDS from './../Images/other/many_close_cards.png'
import FEW_CLOSE_CARDS from './../Images/other/few_close_cards.png'
import CLOSE_CARDS from './../Images/other/close_card.png'
import {enumCard} from './../js/enumCard'
import CardReact from './cardReact';

export default class StackReact extends React.Component {
    constructor(args) {
        super(...args);
        this.handleClick = this.handleClick.bind(this);
        this.dragStart = this.dragStart.bind(this);
        this.eachCard = this.eachCard.bind(this);
    }

    eachCard(card, i) {
        return(
            <CardReact humanAnimation = {card.humanAnimation} pullCardAnimation ={true} game = {this.props.game} key = {card.id}/>
        );
    }

    render() {
        return(
            <a onClick={this.handleClick} id = {"stockCards"}>
                <img draggable={false} src={this.props.img}/>
                {this.props.cards.map(this.eachCard)}
            </a>
        );
    }

    /*
    * game.endAnimation();
    * */

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