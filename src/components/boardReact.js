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

        this.playerHolder = React.createRef();
        this.computerHolder = React.createRef();
        this.openCardHolder = React.createRef();
        this.stackHolder = React.createRef();
        this.statisticsHolder = React.createRef();
        this.pickColorHolder =  React.createRef();

    }

    componentDidUpdate() {
        if(this.state.gameState === "firstGame") {
            this.props.game.setComponents(this.playerHolder.current, this.computerHolder.current
                ,this.openCardHolder.current, this.stackHolder.current,
                this.statisticsHolder.current, this.pickColorHolder.current, this);
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

    /*        this.playerHolder = React.createRef();
        this.computerHolder = React.createRef();
        this.openCardHolder = React.createRef();
        this.stackHolder = React.createRef();
        this.statisticsHolder = React.createRef();
        this.pickColorHolder =  React.createRef();*/

    gameRender(){
        return(
            <div className="container-fluid" onLoad={this.setGame} onChange={console.log("change")}>
                <div><button id="Quit_Game" type="button" style={{visibility : "hidden"}} onClick={this.props.game.quitGame}>Quit Game</button></div>
                <Statistics ref= {this.statisticsHolder}/>
                <OpenCards game = {this.props.game} open = {true} ref= {this.openCardHolder}/>
                <CardsHolder pickColorRef = {this.pickColorHolder} isDraggable = {true} open = {true} className = "playerCards" ref= {this.playerHolder}/>/*player*/
                <CardsHolder isDraggable = {false} open = {false} className = "computerCards" ref= {this.computerHolder}/>/*computer*/
                <PickColor ref= {this.pickColorHolder} game = {this.props.game}/>
                <Stack pickColorRef = {this.pickColorHolder} game = {this.props.game} ref= {this.stackHolder}/>
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