import React from 'react';
import ReactDOM from 'react-dom';
import CardReact from './cardReact';

export default class CardHolderReact extends React.Component {
/*    constructor(args) {
        super(...args);
        this.state = {
            card : undefined
            // cards : [new CardReact(takiImage, 0)]
        };

        this.Drop = this.Drop.bind(this);
    }

    setCard(card){
        this.setState({card: card});
    }

    renderWithCard(){
        return(
            <div onDragOver={this.allowDrop} onDrop = {this.Drop}>
                <CardReact isDraggable = {false} key = {this.state.card.id} openImg = {this.props.open} image = {this.state.card.image} id = {this.state.card.id}>
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
            return this.renderWithCard()
    }

    allowDrop(ev) {
        ev.preventDefault();
    }

    Drop(ev) {
        let id = ev.dataTransfer.getData("Text");
       this.props.game.setDrop(id);
       //  setTimeout(this.props.game.setDrop, id,2000);
    }*/

    constructor(args) {
        super(...args);
        this.Drop = this.Drop.bind(this);
    }

    render() {
        return(
            <div onDragOver={this.allowDrop} onDrop = {this.Drop} id = {"openCards"}>
                <CardReact isDraggable = {false} key = {this.props.card.id} openImg = {this.props.open} image = {this.props.card.image} id = {this.props.card.id}/>
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