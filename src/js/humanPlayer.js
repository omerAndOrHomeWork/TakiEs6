import Player from './player'
import {enumCard} from './enumCard'
import {setCards} from './operations'

export default class HumanPlayer extends Player{
 //   allCards = [];
  //  averageTimePlayed = 0;
  //  turnsPlayed = 0;
  //  singleCardCounter = 0;
 //   takiMode = undefined;
 //   htmlPlayerDiv = enumCard.dives.PLAYER_CARDS;

    
    constructor(playerTurn){
        super("HumanPlayer",playerTurn);
        this.turnsPlayed = 0;
        this.currentTurnTime = 0;
    }


    
    
        removeCard(card) {
        for (let i = 0; i < this.allCards.length; ++i) {
            if (this.allCards[i] === card) {
                this.allCards.splice(i, 1);
            }
        }
    }

    calcCurrentTurn() {
            this.currentTurnTime += 1;
     }

    calculateAVG() {
        this.averageTimePlayed *= (this.turnsPlayed - 1);
        this.averageTimePlayed += this.currentTurnTime;
        this.averageTimePlayed /= this.turnsPlayed;
    }

    resetPlayerClock() {
        this.currentTurnTime = 0;
    }

    setAverageTimePlayed(currentAvarageTimePlayed){
        this.averageTimePlayed = currentAvarageTimePlayed;
    }

    setCards(theCards) {
        this.allCards = theCards;
        setInterval(this.calcCurrentTurn.bind(this),1000);
        super.setCardsPlace();

    }

    setTurnsPlayed(currentTurnsPlayed){
        this.turnsPlayed =  currentTurnsPlayed;
    }

    increasePlayerTurns() {
        this.turnsPlayed += 1;
        super.increasePlayerTurns();
    }

    doOperation(card, lastCard){
        this.removeCard(card);
        return super.doOperation(card, lastCard);

    }


/*        doOperation: function (card, lastCard) {
        removeCard(allCards, card);
        changeMerging(document.getElementById(enumCard.dives.PLAYER_CARDS), allCards.length);
        let promote = card.doOperation(this, lastCard);
        if (takiMode !== undefined) {
            if(takiModeChecker(allCards, takiMode)) {
                promote = enumCard.enumResult.CONTINUE_TURN;
                card.setActive(false);
            }
            else{
                takiMode = undefined;
                if(promote === enumCard.enumResult.CONTINUE_TURN)
                    promote = enumCard.enumResult.NEXT_TURN;
            }
        }

        if (allCards.length === 1)
            singleCardCounter++;
        return promote;
    },*/

    pullCardFromStock(cardsToSet) {
        setCards(this.allCards, cardsToSet);
        super.addCards(cardsToSet);
    }


    isDraggable(){
        return true;
    }

    isComputer() {
        return false;
    }

    clear(){
        super.clear();
        this.turnsPlayed = 0;
        this.currentTurnTime = 0;
    }

    pickColor() {
        // pickColorId.style.visibility = "visible";
        // let pickColorId = document.getElementById(enumCard.dives.PICK_COLOR);


        //this.pickColorComponent.setToVisible();
        this.playerManagement.pickColorVidibility = "visible";

        return enumCard.enumResult.CONTINUE_TURN;
    }

    setPickColorComponent(pickColorHolder) {
        this.pickColorComponent = pickColorHolder;
    }
}