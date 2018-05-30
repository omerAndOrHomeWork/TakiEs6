import React from 'react';
import ReactDOM from 'react-dom';
import CardReact from './cardReact';

export default class CardHolderReact extends React.Component {
    constructor(args) {
        super(...args);
        this.Drop = this.Drop.bind(this);
    }

    render() {
        return(
            <div onDragOver={this.allowDrop} onDrop = {this.Drop} id = {"openCards"}>
                <img draggable={false} src={this.props.card.image}/>
            </div>
        );
    }

    allowDrop(ev) {
        ev.preventDefault();
    }

    Drop(ev) {
        let id = ev.dataTransfer.getData("Text");
        this.props.game.setDrop(id);
    }
}