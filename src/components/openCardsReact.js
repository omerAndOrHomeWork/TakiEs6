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

    render() {
        return(
            <div onDragOver={this.allowDrop} onDrop = {this.Drop}>
                <CardReact isDraggable = {false} key = {this.state.card.id} index = {i} openImg = {this.props.open} image = {this.state.card.image} id = {this.state.card.id}>
                </CardReact>
            </div>
        );
    }

    allowDrop(ev) {
        ev.preventDefault();
    }

    Drop(ev) {
        let id = event.dataTransfer.getData("Text");
        this.game.setDrop(id);
    }
}