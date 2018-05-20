class Game{
/*    gameCards;
    turn;
    players;
    amountOfCardsToTakeFromStock;
    gameStatistics;
    endGame;*/

    constructor(){
        this.gameCards = [];
        this.turn = 0;
        this.players = [new HumanPlayer(), new SmartComputer()];
        this.amountOfCardsToTakeFromStock = 1;
        this.endGame = false;



        this.computerOperation = this.computerOperation.bind(this);
    }

    setComponents(playerHolder, computerHolder, openCardHolder,
                  stackHolder, statisticsHolder, boardHolder) {
        this.players[0].setComponent(playerHolder);
        this.players[1].setComponent(computerHolder);
        this.openCardsComponent = openCardHolder;
        this.stackComponent = stackHolder;
        this.gameStatistics.setComponent(statisticsHolder);
        this.boardComponent = boardHolder;
    }
    
    changeTurn(promote) {
        this.players[this.turn].increasePlayerTurns();
        this.players[this.turn].calculateAVG();
        this.players[this.turn].resetPlayerClock();
        this.turn = (this.turn + promote) % this.players.length;
        this.gameStatistics.updateStatistics();
    }

    calcAmountCardsToTake(card) {
        if (card.getSign() === enumCard.enumTypes.TWO_PLUS) {
            if (this.amountOfCardsToTakeFromStock % 2 === 0)
                this.amountOfCardsToTakeFromStock += 2;
            else
                this.amountOfCardsToTakeFromStock = 2;
        } else
            this.amountOfCardsToTakeFromStock = 1;
    }

    partition() {
        let gameStartCard = stack.getValidOpenCard();
        setCards(this.gameCards, gameStartCard);
        this.openCardsComponent.setCard({image: gameStartCard.uniqueCardImage, id: gameStartCard.id});
        // this.gameCards[0].setParent(enumCard.dives.OPEN_CARDS, false);
        this.players.forEach(p => p.setCards(stack.getCards(8), this.players.length));
    }

    colorPicked(pickedColor) {
        this.gameCards[this.gameCards.length - 1].setColor(pickedColor);
        this.gameCards[this.gameCards.length - 1].setImage(getUniqueCss(Object.keys(enumCard.enumColor)[pickedColor],
            Object.keys(enumCard.enumTypes)[enumCard.enumTypes.CHANGE_COLOR], '_'));
        document.getElementById(enumCard.dives.PICK_COLOR).style.visibility = "hidden";
        this.changeTurn(enumCard.enumResult.NEXT_TURN);
        setTimeout(this.computerOperation, 2000);
    }

    setEventsListener() {
        let drop = document.getElementById(enumCard.dives.OPEN_CARDS);
        drop.draggable = false;
        drop.ondragover = function (ev) {
            ev.preventDefault();
        };

        drop.ondrop = function (event) {
            event.preventDefault();
            let pickColorId = document.getElementById(enumCard.dives.PICK_COLOR);
            if (pickColorId.style.visibility === "visible")
                return false;
            let id = event.dataTransfer.getData("Text");
            let card = game.players[game.turn].getCard(id);
            if (card !== undefined) {
                game.dropValidation(id, card);
            }
        };


        let click = document.getElementById(enumCard.dives.STOCK);
        click.onclick = function (event) {
            event.preventDefault();
            let pickColorId = document.getElementById(enumCard.dives.PICK_COLOR);
            if (pickColorId.style.visibility === "visible")
                return false;
            if (!game.players[game.turn].isComputer())
                game.pullCardValidation(game.players[game.turn]);
        };

        click.ondragstart = () => false;

        let blue = document.getElementById(enumCard.dives.BLUE_PICK);

        blue.onclick = (ev) => {
            ev.preventDefault();
            game.colorPicked(enumCard.enumColor.BLUE);
        };


        blue.onclick = function (ev) {
            ev.preventDefault();
            game.colorPicked(enumCard.enumColor.BLUE);
        };

        let green = document.getElementById(enumCard.dives.GREEN_PICK);
        green.onclick = function (ev) {
            ev.preventDefault();
            game.colorPicked(enumCard.enumColor.GREEN);
        };

        let red = document.getElementById(enumCard.dives.RED_PICK);
        red.onclick = function (ev) {
            ev.preventDefault();
            game.colorPicked(enumCard.enumColor.RED);
        };

        let yellow = document.getElementById(enumCard.dives.YELLOW_PICK);
        yellow.onclick = function (ev) {
            ev.preventDefault();
            game.colorPicked(enumCard.enumColor.YELLOW);
        };

        window.onresize = function () {
            changeMerging(document.getElementById(enumCard.dives.PLAYER_CARDS), game.players[0].getAllCards().length);
            changeMerging(document.getElementById(enumCard.dives.COMPUTER_CARDS), game.players[1].getAllCards().length);
        };
    }

    endGameMode(massage) {
        this.endGame = true;
        document.getElementById(enumCard.dives.QUIT_GAME).style.visibility = "hidden";
        document.getElementById(enumCard.dives.PICK_COLOR).style.visibility = "hidden";
        document.getElementById(enumCard.dives.END_GAME_MODE).style.visibility = "visible";
        document.getElementById(enumCard.dives.STOCK_AND_OPEN_CARDS).style.visibility = "hidden";
        document.getElementById(enumCard.dives.MASSAGE).innerText = massage + " win!";
    }

    setDrop(id){
        let card = this.players[this.turn].getCard(id);
        if (card !== undefined) {
            this.dropValidation(card);
        }
    }

    dropValidation(card) {
        if (takiPermission(this.players[this.turn], card) && card.doValidation(this.gameCards[this.gameCards.length - 1])) {
            let promote = this.players[this.turn].doOperation(card, this.gameCards[this.gameCards.length - 1]);
            document.getElementById(enumCard.dives.OPEN_CARDS).removeChild(this.gameCards[this.gameCards.length - 1].getElement());
/*            card.setParent(enumCard.dives.OPEN_CARDS, false);
            card.changeImage(true);*/
            this.gameCards[this.gameCards.length - 1].setActive(false);
            this.gameCards.push(card);
            this.openCardsComponent.setCard({image: card.uniqueCardImage, id: card.id});
            this.calcAmountCardsToTake(card);
            if (this.players[this.turn].getAmountOfCards() === 0 && card.getSign() !== enumCard.enumTypes.PLUS) {
                this.endGameMode(Object.keys(enumCard.enumPlayer)[this.turn]);
            }
            if (promote !== enumCard.enumResult.CONTINUE_TURN)
                this.changeTurn(promote);
            setTimeout(this.computerOperation, 2000);
        }
    }

    refreshStockAndOpenCards() {
        if (this.gameCards.length === 1) {
            this.endGameMode("TIE! nobody ");
        } else {
            removeAllCards(enumCard.dives.OPEN_CARDS);
            let lastCard = this.gameCards.pop();
            stack.makeStockAgain(this.gameCards);
            this.gameCards = undefined;
            this.gameCards = [];
            this.gameCards.push(lastCard);
            this.openCardsComponent.setCard({image: lastCard.uniqueCardImage, id: lastCard.id});
            stack.changeStockImage();//TODO: delete this method
            this.stackComponent.changeImage(stack.getLength());//TODO: take it to react
        }
    }

    pullCardValidation(player) {
        if (player === this.players[this.turn] && player.pullApproval(this.gameCards[this.gameCards.length - 1])) {
            stack.changeStockImage();
            this.gameCards[this.gameCards.length - 1].setActive(false);
            player.setTakiMode(undefined);
            let cardsFromStock = stack.getCards(this.amountOfCardsToTakeFromStock);
            if (stack.getLength() <= this.amountOfCardsToTakeFromStock) {
                this.refreshStockAndOpenCards();
            }
            this.amountOfCardsToTakeFromStock = 1;
            player.pullCardFromStock(cardsFromStock);
/*            for (let i = 0; i < cardsFromStock.length; ++i)
                cardsFromStock[i].setParent(player.getHtmlDiv(), player.isDraggable());*/
            this.changeTurn(enumCard.enumResult.NEXT_TURN);
            setTimeout(this.computerOperation, 2000);
        }
    }

    computerOperation() {
        if (!this.endGame && this.players[this.turn].isComputer()) {
            if (this.players[this.turn].colorToPick()) {
                let color = this.players[this.turn].getColor();
                this.colorPicked(color);
            } else {
                let card = this.players[this.turn].pickCard(this.gameCards[this.gameCards.length - 1]);
                if (card === undefined)
                    this.pullCardValidation(this.players[this.turn]);
                else {
                    this.dropValidation(this.players[this.turn], card);
                }
            }
        }
    }

    removeHTMLElements() {
        removeAllCards(enumCard.dives.COMPUTER_CARDS);
        removeAllCards(enumCard.dives.PLAYER_CARDS);
        removeAllCards(enumCard.dives.OPEN_CARDS);
        removeAllCards(enumCard.dives.STATISTICS);
    }

    resetDivsAttributes() {
        document.getElementById(enumCard.dives.QUIT_GAME).style.visibility = "visible";
        document.getElementById(enumCard.dives.END_GAME_MODE).style.visibility = "hidden";
        document.getElementById(enumCard.dives.STOCK_AND_OPEN_CARDS).style.visibility = "visible";
        document.getElementById(enumCard.dives.MASSAGE).innerText = '';
    }

    getGameCards() {
        let allCards = [];
        takeCards(allCards, this.players[0].getAllCards());
        takeCards(allCards, this.players[1].getAllCards());
        takeCards(allCards, this.gameCards);
        return allCards;
    }

    initialGameAndStatistics() {
        this.turn = 0;
        this.partition();
        this.gameStatistics = new statistics(this.players);
        this.gameStatistics.setStatistics();
        this.gameStatistics.updateStatistics();
        this.setEventsListener();
    }

        startGame() {
            document.getElementById("Enter_Game").style.visibility = "hidden";
            document.getElementById(enumCard.dives.QUIT_GAME).style.visibility = "visible";
            stack.setGame();
            this.initialGameAndStatistics();
            this.gameStatistics.initialStatisticsTitle();
            setTimeout(this.computerOperation, 2000);
        }

        restartGame() {
            event.preventDefault();
            this.endGame = false;
            this.removeHTMLElements();
            this.resetDivsAttributes();
            let allCards;
            allCards = this.getGameCards();
            let playerAverageTurnTime = this.players[0].getAverageTimePlayed();
            let playerTurn = this.players[0].getTurnsPlayed();
            this.players[0] = undefined;
            this.players[1] = undefined;
            this.gameCards = undefined;
            this.players = undefined;
            this.gameCards = [];
            stack.makeStockAgain(allCards);
            this.players = [new HumanPlayer(), new SmartComputer()];
            this.gameStatistics = undefined;
            this.players[0].setAverageTimePlayed(playerAverageTurnTime);
            this.players[0].setTurnsPlayed(playerTurn);
            this.initialGameAndStatistics();
            setTimeout(this.computerOperation, 2000);
        }

        quitGame() {
            this.endGameMode("PLAYER quit! COMPUTER");
        }
}