import React from 'react';
import ReactDOM from 'react-dom';
import CardReact from './cardReact';

export default class CardHolderReact extends React.Component {
    constructor(args) {
        super(...args);
        this.state = {
            cards : [undefined]
            // cards : [new CardReact(takiImage, 0)]
        };
    }

    setCards(cards) {
        let theCards = this.state.cards;
        cards.forEach(card => theCards.push(card));
        /*card.openCard(true);
        card.setDraggable(true);
        card.setRemove(this.removeCard);
        //theCards.forEach(c => c.openCard(true));*/
        this.setState({cards: theCards});
    }

    removeCard(id){
        let theCards = this.state.cards;
        for (let i = 0; i < theCards.length; ++i) {
            if (theCards[i].id === id) {
                theCards.splice(i, 1);
            }
        }

        this.setState({cards: theCards});
    }

    eachCard(card, i) {
        return(
          <CardReact isDraggable = {this.props.isDraggable} key = {card.id} index = {i} openImg = {this.props.open} image = {card.image} id = {card.id}>
          </CardReact>
        );
    }

    render() {
        return(
            <div>
                {this.state.cards.map(this.eachCard)}
            </div>
        );
    }
}