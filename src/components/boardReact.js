import React from 'react';
import ReactDOM from 'react-dom';
import Statistics from './statisticsReact'
import OpenCards from './openCardsReact'
import Stack from './stackReact'
import CardsHolder from './cardsHolderReact'
import PickColor from './pickColor'


export default class BoardReact extends React.Component {
/*    constructor(args) {
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

/!*    setGame(){
        this.props.game.setComponents(this.refs.playerHolder, this.refs.computerHolder
            ,this.refs.openCardHolder, this.refs.stackHolder,
            this.refs.statisticsHolder, this);
        this.props.game.startGame();

    }*!/

    makeStartGame() {
/!*        // this.props.game = new Game();
        this.props.game.setComponents(this.refs.playerHolder, this.refs.computerHolder
            ,this.refs.openCardHolder, this.refs.stackHolder,
            this.refs.statisticsHolder, this.refs.pickColorComponent, this);
        this.props.game.startGame();*!/
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

    /!*  this.playerHolder = React.createRef();
        this.computerHolder = React.createRef();
        this.openCardHolder = React.createRef();
        this.stackHolder = React.createRef();
        this.statisticsHolder = React.createRef();
        this.pickColorHolder =  React.createRef();*!/

    gameRender(){
        return(
            <div className="container-fluid" onLoad={this.setGame} onChange={console.log("change")}>
                <div><button id="Quit_Game" type="button" style={{visibility : "hidden"}} onClick={this.props.game.quitGame}>Quit Game</button></div>
                <Statistics ref= {this.statisticsHolder}/>
                <OpenCards game = {this.props.game} open = {true} ref= {this.openCardHolder}/>
                <CardsHolder pickColorRef = {this.pickColorHolder} isDraggable = {true} open = {true} className = "playerCards" ref= {this.playerHolder}/>/!*player*!/
                <CardsHolder isDraggable = {false} open = {false} className = "computerCards" ref= {this.computerHolder}/>/!*computer*!/
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
    }*/

    constructor(args) {
        super(...args);
        this.pickColorHolder =  React.createRef();
        this.setGame = this.setGame.bind(this);
        this.setTournament = this.setTournament.bind(this);
        this.restart = this.restart.bind(this);
        this.restartTournament = this.restartTournament.bind(this);
        this.eachMassage = this.eachMassage.bind(this);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.state = {
            gameState: "start",
        };
    }

    changeSate(state){
        this.setState({gameState: state});
    }

    setGame(){
        this.props.manager.setStartGame(this, this.props.game);
    }

    setTournament(){
        this.props.manager.setStartTournament(this, this.props.game);
    }

    restartTournament(){
        this.props.manager.setRestartTournamentStartGame();
    }

    restart(){
        this.props.manager.setRestartStartGame();
    }


    openingWindowRender(){
        return(
            <div>
                <button id="Enter_Game" type="button" onClick={this.setGame}>Play Game</button>
                <button id="Enter_Game" type="button" onClick={this.setTournament}>Play Tournament</button>
            </div>
        );
    }

    gameRender(){
        return(
            <div className="container-fluid">
                <div><button id="Quit_Game" type="button" style={{visibility : "visible"}} onClick={this.props.manager.setQuitGame}>Quit Game</button></div>
                <Statistics msg= {this.props.manager.statisticsMassages}/>
                <OpenCards card =  {this.props.manager.openCard} open = {true} game = {this.props.game}/>
                <CardsHolder cards = {this.props.manager.playersCards[0]} pickColorRef = {this.pickColorHolder} isDraggable = {true} open = {true} cssId = "playerCards" />
                <CardsHolder cards = {this.props.manager.playersCards[1]} pickColorRef = {this.pickColorHolder} isDraggable = {false} open = {true} cssId = "computerCards" />
                <PickColor interactive = {true} visible = {this.props.manager.pickColorVidibility} ref= {this.pickColorHolder} game = {this.props.game}/>
                <Stack  interactive = {true} img = {this.props.manager.stackImage} pickColorRef = {this.pickColorHolder} game = {this.props.game}/>
            </div>
        );
    }

    endGameRender(){
        return(
            <div>
                <div id = {"endGameMode"}>
                    <p id ="massage">{this.props.manager.massage}</p>
                    <button id={"restartGame"} onClick={this.restart}>Restart Game</button>
                    <button id={"endGame"} onClick={window.close}>Exit Game</button>
                </div>
                <div className="container-fluid">
                    <div><button id="Quit_Game" type="button" style={{visibility : "visible"}} onClick={this.props.manager.setQuitGame}>Quit Game</button></div>
                    <Statistics msg= {this.props.manager.statisticsMassages}/>
                    <OpenCards card =  {this.props.manager.openCard} open = {true} game = {this.props.game}/>
                    <CardsHolder cards = {this.props.manager.playersCards[0]} pickColorRef = {this.pickColorHolder} isDraggable = {false} open = {true} cssId = "playerCards" />
                    <CardsHolder cards = {this.props.manager.playersCards[1]} pickColorRef = {this.pickColorHolder} isDraggable = {false} open = {false} cssId = "computerCards" />
                    <PickColor interactive = {false} visible = {this.props.manager.pickColorVidibility} ref= {this.pickColorHolder} game = {this.props.game}/>
                    <Stack interactive = {false} img = {this.props.manager.stackImage} pickColorRef = {this.pickColorHolder} game = {this.props.game}/>
                </div>
                <div>
                    <p id ="massage">{this.props.manager.error}</p>
                    <button id={"next"} onClick={this.next}>this.next</button>
                    <button id={"prev"} onClick={this.prev}>this.prev</button>
                </div>
            </div>
        );
    }

    next(){
        this.props.manager.next();
    }

    prev(){
        this.props.manager.prev();
    }

    // TODO: change restarts options in and game/tournament

    endTournamentRender(){
        return(
            <div id = {"endGameMode"}>
                <div id={"massage"}>
                {this.props.manager.massage.map(this.eachMassage)}
                </div>
                <button id={"restartGame"} onClick={this.restart}>Start Regular Game</button>
                <button id={"restartTournament"} onClick={this.restartTournament}>Restart Tournament</button>
                <button id={"endGame"} onClick={window.close}>Exit Game</button>
            </div>
        );
    }

    eachMassage(msg,i) {
        return(
            <p key={i}>{msg}</p>
        );
    }
    //TODO: Omer need to take care on the css

    endGameInTournamentRender(){
        return(
            <div id = {"endGameMode"}>
                <p id ="massage">{this.props.manager.massage}</p>
                <button id={"restartGame"} onClick={this.restart}>Next Game</button>
            </div>
        );
    }

    render(){
        if(this.props.manager.gameState === "start")
            return this.openingWindowRender();
        else if(this.props.manager.gameState === "gaming")
            return this.gameRender();
        else if(this.props.manager.gameState === "endGame")
            return this.endGameRender();
        else if(this.props.manager.gameState === "endGameInTournament")
            return this.endGameInTournamentRender();
        else if(this.props.manager.gameState === "endTournament")
            return this.endTournamentRender();
    }
}