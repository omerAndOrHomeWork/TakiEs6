import React from 'react';
import ReactDOM from 'react-dom';
import CloseCard from './../Images/other/close_card.png'
import {enumCard} from './../js/enumCard'

export default class CardReact extends React.Component {
    constructor(args) {
        super(...args);
        this.onDragStart = this.onDragStart.bind(this);
    }

    onDragStart(ev) {
        let changeColorReact = this.props.pickColorRef.current;
        if(changeColorReact.props.visible === "visible"){
            this.props.game.renderError(enumCard.enumErrors.DRAG_CARD_WITH_CHANGE_COLOR_PICK);
            return false;
        }
        ev.dataTransfer.setData("Text", this.props.id);
    }


    render() {
        return(
            <a>
                <img draggable={this.props.isDraggable} onDragStart={this.onDragStart} src={this.props.openImg? this.props.image : CloseCard}/>
            </a>
        );
    }
}