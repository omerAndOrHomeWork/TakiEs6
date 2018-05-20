import React from 'react';
import ReactDOM from 'react-dom';
import CloseCard from './../Images/other/close_card.png'

export default class CardReact extends React.Component {


    constructor(args) {
        super(...args);
/*        this.props = {
            id: id,
            openCard: openCard,
            closeCardImage: CloseCard
        };*/
    }

/*    setDraggable(draggable){
        this.setState({draggable: draggable});
    }

    openCard(open){
        if(open)
            this.setState({image: this.state.openImg});
        else
            this.setState({image: this.state.closeImg});
    }*/

    onDragStart(ev) {
        let changeColorReact = ReactDOM.findDOMNode(React.Component());
        if(changeColorReact.visibility === "visible" && !this.props.isDraggable)
            return false;
        this.draggable = true;
        ev.dataTransfer.setData("Text", this.props.id);
    }

    render() {
        return(
            <a onDragStart={this.onDragStart}>
                <img src={this.props.openImg? this.props.image : CloseCard}/>
            </a>
        );
    }

    /*        let img;
        if(this.props.openImg)
            img = this.props.image;
        else
            img = CloseCard;

        return(
            <a onDragStart={this.onDragStart}>
                <img src={img}/>
            </a>
        );*/

    /*render() {
        return(
            <a key={this.id} index={this.id} onDragStart={this.onDragStart}>
                <img src={this.state.image}/>
            </a>
        );
    }*/
}