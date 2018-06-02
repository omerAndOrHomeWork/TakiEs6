import React from 'react';
import ReactDOM from 'react-dom';
import CloseCard from './../Images/other/close_card.png'
import {enumCard} from './../js/enumCard'

export default class CardReact extends React.Component {
    constructor(args) {
        super(...args);
        this.state = {
            bold: false,
            //animation: false
        };
        this.onDragStart = this.onDragStart.bind(this);
        this.mouseover = this.mouseover.bind(this);
        this.onmouseout = this.onmouseout.bind(this);
        this.endAnimation = this.endAnimation.bind(this);
    }

    onDragStart(ev) {
        let changeColorReact = this.props.pickColorRef.current;
        if(changeColorReact.props.visible === "visible"){
            this.props.game.renderError(enumCard.enumErrors.DRAG_CARD_WITH_CHANGE_COLOR_PICK);
            return false;
        }
        ev.dataTransfer.setData("Text", this.props.id);
    }
/*

    render() {
        if(this.state !== null) {
            if (this.state.anm) {
                this.state = null;
                return this.renderWithAnimation();
            }
            this.state = null;
            return this.renderWithoutAnimation();
        }else{
            if (this.props.anm)
                return this.renderWithAnimation();
            return this.renderWithoutAnimation();
        }
    }


    finishAnimation(){
        this.setState({anm: false});
    }
*/


    render() {
        if(this.props.pullCardAnimation !== undefined) {
            if (this.props.humanAnimation === true) {
                return this.renderWithHumanAnimation();
            }
            else {
                return this.renderWithComputerAnimation();
            }
        }
        else {
            if (!this.state.bold)
                return this.renderWithoutBold();
            else
                return this.renderWithBold();
        }
    }

    endAnimation(){
        this.props.game.animationCardEnd();
    }

    renderWithComputerAnimation(){
        return(
            <a id="regular">
                <img onAnimationEnd={this.endAnimation} style={{transition: "0.6s",animation: "computerPullCard_move 2s"}} draggable={false} src={CloseCard}/>
            </a>
        );
    }

    renderWithHumanAnimation(){
        return(
            <a id="regular">
                <img onAnimationEnd={this.endAnimation} style={{transition: "0.6s",animation: "humanPullCard_move 2s"}} draggable={false} src={CloseCard}/>
            </a>
        );
    }

    renderWithBold(){
        return(
            <a id= "bold">
                <img onMouseEnter={this.mouseover} onMouseOut={this.onmouseout} draggable={this.props.isDraggable} onDragStart={this.onDragStart} src={this.props.openImg? this.props.image : CloseCard}/>
            </a>
        );
    }

    renderWithoutBold(){
        return(
            <a id="regular">
                <img onMouseEnter={this.mouseover} onMouseOut={this.onmouseout} draggable={this.props.isDraggable} onDragStart={this.onDragStart} src={this.props.openImg? this.props.image : CloseCard}/>
            </a>
        );
    }

    mouseover(ev){
        if(this.props.isDraggable){
            this.setState({bold: true});
        }
    }

    onmouseout(ev){
        if(this.props.isDraggable){
            this.setState({bold: false});
        }
    }
}