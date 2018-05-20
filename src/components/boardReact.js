import React from 'react';
import ReactDOM from 'react-dom';
import Statistics from './statisticsReact'
import OpenCards from './openCardsReact'
import Stack from './stackReact'
import CardsHolder from './cardsHolderReact'

export default class BoardReact extends React.Component {
    constructor(args) {
        super(...args);
        this.state = {
            // cardsHolder: [undefined],
            gameStat: "start"
        };

        this.makeGameStart = this.makeGameStart.bind(this);

    }

    componentDidMount() {
        if(this.state.gameStat === "gaming") {
            this.game = new Game();
            this.game.setComponents(this.refs.playerHolder, this.refs.computerHolder
                ,this.refs.openCardHolder, this.refs.stackHolder,
                this.refs.statisticsHolder, this);
            this.game.startGame();
        }else if(this.state.gameStat === "restarted"){
            this.game.restartGame();
        }
    }

    makeGameStart() {
        // this.props.game.start();
        this.setState({gameStat: "gaming"});
    }

    openingWindowRender(){
        return(
            <div><button id="Enter_Game" type="button" onClick={this.makeGameStart}>Enter Game</button></div>
        );
    }

    static eachCardHolder(cardHolder, i) {
        return(
            cardHolder.render()
        );
    }

    gameRender(){
        return(
            <div className="container-fluid">
                <div><button id="Quit_Game" type="button" onClick={this.game.quitGame()} style="visibility: hidden">Quit Game</button></div>
                <Statistics ref="statisticsHolder"/>
                <OpenCards ref="openCardHolder"/>
                <CardsHolder isDraggable = {true} open = {true} className = "playerCards" ref="playerHolder"/>/*player*/
                <CardsHolder isDraggable = {false} open = {false} className = "computerCards" ref="computerCards"/>/*computer*/
                <Stack ref="stackHolder"/>
                {/*{this.state.cardsHolder.map(BoardReact.eachCardHolder)}*/}
            </div>
        );
    }

    endGameRender(){
        return(
            <div id = "endGameMode" style="visibility: hidden">
                <b id = "massage"/>
                <button id="restartGame" onClick="game.restartGame()">Restart Game</button>
                <button id="endGame" onClick="window.close()">Exit Game</button>
            </div>
        );
    }

    render(){
        if(this.state.gameStat === "start")
            return this.openingWindowRender();
        else if(this.state.gameStat === "gaming")
            return this.gameRender();
        else
            return this.endGameRender();
    }
}