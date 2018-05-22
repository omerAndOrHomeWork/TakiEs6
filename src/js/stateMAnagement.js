import Game from "./game";

export default class  StateManagement{
    constructor(){
        this.playersCards = [];
        this.pickColorVidibility = "hidden";
        this.openCard = undefined;
        this.stackImage = undefined;
        this.statisticsMassages = undefined;
        this.gameState =  "start";
        this.setStartGame = this.setStartGame.bind(this);
        this.setRestartStartGame = this.setRestartStartGame.bind(this);
        this.setQuitGame = this.setQuitGame.bind(this);

        // this.handleClick = this.handleClick.bind(this);

    }

    setStartGame(boardReact, game){
        this.boardReact = boardReact;
        this.game = game;
        this.game.setManager(this);
        this.gameState = "gaming";
        this.game.startGame();
    }

    renderGame(){
        //this.boardReact.render();
        this.boardReact.changeSate(this.gameState);
    }

    endGame(massage){
        this.massage = massage;
        this.gameState =  "endGame";
        this.boardReact.changeSate(this.gameState);
    }

    setRestartStartGame(){
        this.game.restartGame();
        this.gameState =  "gaming";
    }

    setQuitGame(){
        this.game.quitGame();
    }

}