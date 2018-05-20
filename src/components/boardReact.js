import React from 'react';
import ReactDOM from 'react-dom';
import Statistics from './statisticsReact'
import OpenCards from './openCardsReact'
import Stack from './stackReact'
import CardsHolder from './cardsHolderReact'
import PickColor from './pickColor'
import Game from './../js/game'
// import Css from './../css/cards.css'


export default class BoardReact extends React.Component {
    constructor(args) {
        super(...args);
        this.state = {
            // cardsHolder: [undefined],
            gameState: "start",
            massage: undefined
        };

        this.makeStartGame = this.makeStartGame.bind(this);
        this.makeRestartGame = this.makeRestartGame.bind(this);

    }

    componentDidUpdate() {
        if(this.state.gameState === "firstGame") {
            this.props.game.setComponents(this.refs.playerHolder, this.refs.computerHolder
                ,this.refs.openCardHolder, this.refs.stackHolder,
                this.refs.statisticsHolder, this.refs.pickColorHolder, this);
            this.props.game.startGame();
        }
    }

/*    setGame(){
        this.props.game.setComponents(this.refs.playerHolder, this.refs.computerHolder
            ,this.refs.openCardHolder, this.refs.stackHolder,
            this.refs.statisticsHolder, this);
        this.props.game.startGame();

    }*/

    makeStartGame() {
/*        // this.props.game = new Game();
        this.props.game.setComponents(this.refs.playerHolder, this.refs.computerHolder
            ,this.refs.openCardHolder, this.refs.stackHolder,
            this.refs.statisticsHolder, this.refs.pickColorComponent, this);
        this.props.game.startGame();*/
        this.setState({gameState: "firstGame"});
    }

    makeEndGame(massage) {
        this.setState({gameState: "endGame",  massage: massage});
    }

    makeRestartGame() {
        this.props.game.restartGame();
        this.setState({gameState: "gaming"});
    }

    static eachCardHolder(cardHolder, i) {
        return(
            cardHolder.render()
        );
    }

    openingWindowRender(){
        return(
            <div><button id="Enter_Game" type="button" onClick={this.makeStartGame}>Enter Game</button></div>
        );
    }

    gameRender(){
        return(
            <div className="container-fluid" onLoad={this.setGame}>
                <div><button id="Quit_Game" type="button" style={{visibility : "hidden"}} onClick={this.props.game.quitGame}>Quit Game</button></div>
                <Statistics ref="statisticsHolder"/>
                <OpenCards game = {this.props.game} ref="openCardHolder"/>
                <CardsHolder isDraggable = {true} open = {true} className = "playerCards" ref="playerHolder"/>/*player*/
                <CardsHolder isDraggable = {false} open = {false} className = "computerCards" ref="computerHolder"/>/*computer*/
                <PickColor ref="pickColorHolder" game = {this.props.game}/>
                <Stack game = {this.props.game} ref="stackHolder"/>
                {/*{this.state.cardsHolder.map(BoardReact.eachCardHolder)}*/}
            </div>
        );
    }

    endGameRender(){
        return(
            <div id = "endGameMode" style={{visibility: "hidden"}}>
                <b>{this.state.massage}</b>
                <button id="restartGame" onClick={this.makeRestartGame}>Restart Game</button>
                <button id="endGame" onClick={window.close}>Exit Game</button>
            </div>
        );
    }

    render(){
        if(this.state.gameState === "start")
            return this.openingWindowRender();
        else if(this.state.gameState === "gaming" || this.state.gameState === "firstGame")
            return this.gameRender();
        else if(this.state.gameState === "endGame")
            return this.endGameRender();
    }
}