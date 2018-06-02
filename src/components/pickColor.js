import React from 'react';
import ReactDOM from 'react-dom';
import CardReact from './cardReact';
import {enumCard} from './../js/enumCard'

export default class PickColorReact extends React.Component {
    constructor(args) {
        super(...args);
        this.bluePicked = this.bluePicked.bind(this);
        this.yellowPicked = this.yellowPicked.bind(this);
        this.greenPicked = this.greenPicked.bind(this);
        this.redPicked = this.redPicked.bind(this);
        this.finishAnimation = this.finishAnimation.bind(this);

    }
    renderWithAnimation(){
        return(
            <div id = "pickColor" style={{visibility : this.props.visible, transition: "0.6s",animation: "yellowColor 2s"}}>
                <button onAnimationEndCapture={this.finishAnimation} id="yellowPicker" style={{transition: "0.6s",animation: "yellowColor 2s"}} onClick={this.yellowPicked}/>
                <button onAnimationEndCapture={this.finishAnimation} id="bluePicker" style={{transition: "0.6s",animation: "blueColor 2s"}} onClick={this.bluePicked}/>
                <button onAnimationEndCapture={this.finishAnimation} id="greenPicker" style={{transition: "0.6s",animation: "greenColor 2s"}} onClick={this.greenPicked}/>
                <button onAnimationEndCapture={this.finishAnimation} id="redPicker" style={{transition: "0.6s",animation: "redColor 2s 1"}} onClick={this.redPicked}/>
            </div>
        );
    }

    renderWithoutAnimation(){
        return(
            <div id = "pickColor" style={{visibility : this.props.visible}}>
                <button id="yellowPicker" onClick={this.yellowPicked}/>
                <button id="bluePicker" onClick={this.bluePicked}/>
                <button id="greenPicker" onClick={this.greenPicked}/>
                <button id="redPicker" onClick={this.redPicked}/>
            </div>
        );
    }

    render() {
        if(this.props.visible == "visible")
            return this.renderWithAnimation();
        else
            return this.renderWithoutAnimation();
    }

    finishAnimation(){
        this.setState({anm: false});
    }


    bluePicked(ev) {
        if(this.props.interactive === false)
            return false;
        ev.preventDefault();
        this.props.game.colorPicked(enumCard.enumColor.BLUE);
    }

    yellowPicked(ev) {
        if(this.props.interactive === false)
            return false;
        ev.preventDefault();
        this.props.game.colorPicked(enumCard.enumColor.YELLOW);
    }

    greenPicked(ev) {
        if(this.props.interactive === false)
            return false;
        ev.preventDefault();
        this.props.game.colorPicked(enumCard.enumColor.GREEN);
    }

    redPicked(ev) {
        if(this.props.interactive === false)
            return false;
        ev.preventDefault();
        this.props.game.colorPicked(enumCard.enumColor.RED);
    }
}