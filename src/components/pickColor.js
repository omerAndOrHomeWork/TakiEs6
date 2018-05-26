import React from 'react';
import ReactDOM from 'react-dom';
import CardReact from './cardReact';
import {enumCard} from './../js/enumCard'

export default class PickColorReact extends React.Component {
/*    constructor(args) {
        super(...args);
        this.state = {
            visible: "hidden"
        };
    }

    setToVisible(){
        this.setState({visible: "visible"});
    }

    render() {
        return(
            <div id = "pickColor" style={{visibility : this.state.visible}}>
                <button id="yellowPicker" onClick={this.yellowPicked}/>
                <button id="bluePicker" onClick={this.bluePicked}/>
                <button id="greenPicker" onClick={this.greenPicked}/>
                <button id="redPicker" onClick={this.redPicked}/>
            </div>
        );
    }

    bluePicked(ev) {
        ev.preventDefault();
        this.props.game.colorPicked(enumCard.enumColor.BLUE);
        this.setState({visible: "hidden"});
    }

    yellowPicked(ev) {
        ev.preventDefault();
        this.props.game.colorPicked(enumCard.enumColor.YELLOW);
        this.setState({visible: "hidden"});
    }

    greenPicked(ev) {
        ev.preventDefault();
        this.props.game.colorPicked(enumCard.enumColor.GREEN);
        this.setState({visible: "hidden"});
    }

    redPicked(ev) {
        ev.preventDefault();
        this.props.game.colorPicked(enumCard.enumColor.RED);
        this.setState({visible: "hidden"});
    }*/
    constructor(args) {
        super(...args);
        this.bluePicked = this.bluePicked.bind(this);
        this.yellowPicked = this.yellowPicked.bind(this);
        this.greenPicked = this.greenPicked.bind(this);
        this.redPicked = this.redPicked.bind(this);
    }
    render() {
        return(
            <div id = "pickColor" style={{visibility : this.props.visible}}>
                <button id="yellowPicker" onClick={this.yellowPicked}/>
                <button id="bluePicker" onClick={this.bluePicked}/>
                <button id="greenPicker" onClick={this.greenPicked}/>
                <button id="redPicker" onClick={this.redPicked}/>
            </div>
        );

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