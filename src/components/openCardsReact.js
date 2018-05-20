import React from 'react';
import ReactDOM from 'react-dom';
import CardReact from './cardReact';

export default class CardHolderReact extends React.Component {
    constructor(args) {
        super(...args);
        this.state = {
            card : undefined
            // cards : [new CardReact(takiImage, 0)]
        };
    }

    setCard(card){
        this.setState({cards: card});
    }

    renderWithCard(){
        return(
            <div onDragOver={this.allowDrop} onDrop = {this.Drop}>
                <CardReact isDraggable = {false} key = {this.state.card.id} index = {i} openImg = {this.props.open} image = {this.state.card.image} id = {this.state.card.id}>
                </CardReact>
            </div>
        );
    }

    renderWithoutCard(){
        return(
            <div>
            </div>
        );
    }
    render() {
        if (this.state.card === undefined)
            return this.renderWithoutCard();
        else
            this.renderWithCard()
    }

    allowDrop(ev) {
        ev.preventDefault();
    }

    Drop(ev) {
        let id = event.dataTransfer.getData("Text");
        this.props.game.setDrop(id);
    }
}