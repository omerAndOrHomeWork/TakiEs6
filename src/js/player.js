class Player{
/*    allCards = [];
    singleCardCounter;
    averageTimePlayed;
    turnsPlayedForStatistics;
    takiMode;
    htmlPlayerDiv;*/

    //constructor(theCards,placeHolder)
    constructor(placeHolder){
        this.allCards = [];
        this.singleCardCounter = 0;
        this.averageTimePlayed = 0;
        this.turnsPlayedForStatistics = 0;
        this.takiMode = undefined;
        this.htmlPlayerDiv = placeHolder;
    }

    /*

Player.prototype.removeCardAppearances = function () {
        throw new Error('You have to implement the method doSomething!');
    };

    /!*
    /!*
    * have to implement!!
    * *!/
    removeCardAppearances(){
        throw new Error('You have to implement the method doSomething!');
    }*!/

*/

    setComponent(component){
        this.component = component;
    }

    increasePlayerTurns(){
        this.turnsPlayedForStatistics += 1;
    }

    pullApproval(lastCard){
        let answer = true;
        this.allCards.some(card =>{
           if(card.doValidation(lastCard)) {
               answer = false;
               return true;
           }
        });
        return answer;
    }

    getCard(id) {
        let cardToReturn = undefined;
       this.allCards.some(card => {
            if (card.getId().toString() === id) {
                cardToReturn = card;
                return true;
            }
        });

        return cardToReturn;
    }

    getHtmlDiv() {
        return this.htmlPlayerDiv;
    }

    getTurnsPlayed(){
        return this.turnsPlayedForStatistics;
    }

    getAmountOfCards(){
        return this.allCards.length;
    }

    setTakiMode(card) {
        this.takiMode = card;
    }

    getAllCards(){
        return this.allCards;
    }

    getTakiMode() {
        return this.takiMode;
    }



    getAverageTimePlayed(){
        return this.averageTimePlayed;
    }

    setCardsPlace(placeHolder, open){
        this.allCards.forEach(card => {
            card.setParent(placeHolder, open);
            card.changeImage(open);
        });
    }

    getSingleCardCounter(){
        return this.singleCardCounter;
    }


    doOperation(card, lastCard) {
        changeMerging(document.getElementById(enumCard.dives.COMPUTER_CARDS), this.allCards.length);
        let promote = card.doOperation(this, lastCard);
        if (this.takiMode !== undefined) {
            if(takiModeChecker(this.allCards, this.takiMode)) {
                promote = enumCard.enumResult.CONTINUE_TURN;
                card.setActive(false);
            }
            else{
                this.takiMode = undefined;
                if(promote === enumCard.enumResult.CONTINUE_TURN)
                    promote = enumCard.enumResult.NEXT_TURN;
            }
        }
        if (this.allCards.length === 1)
            this.singleCardCounter++;
        return promote;
    }
}