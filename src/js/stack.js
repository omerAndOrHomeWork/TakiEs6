let stack = (function () {
    let cards = [];
    let twoCardsNumber = [1, 3, 4, 5, 6, 7, 8, 9];
    let colorNumber = [enumCard.enumColor.RED, enumCard.enumColor.BLUE,
        enumCard.enumColor.GREEN, enumCard.enumColor.YELLOW];
    let id = 0;
    let css;
    let htmlStock;

    function createDeck() {
        let stockImage = document.createElement("img");
        htmlStock = document.createElement("div");

        htmlStock.appendChild(stockImage);
        stockImage.src = enumCard.images.MANY_CLOSE_CARDS;
        htmlStock.setAttribute("id", enumCard.dives.STOCK);
        document.getElementById(enumCard.dives.STOCK_AND_OPEN_CARDS).appendChild(htmlStock);
        for (let number = 0; number < twoCardsNumber.length; ++number) {
            for (let color = 0; color < colorNumber.length; ++color) {
                css = getUniqueCss(Object.keys(enumCard.enumColor)[color], twoCardsNumber[number].toString(), '_');

                cards.push(new NumberCard(colorNumber[color], enumCard.enumTypes.NUMBER, id++));
                cards[cards.length - 1].number = twoCardsNumber[number];
                cards[cards.length - 1].setElement(css);

                cards.push(new NumberCard(colorNumber[color], enumCard.enumTypes.NUMBER, id++));
                cards[cards.length - 1].number = twoCardsNumber[number];
                cards[cards.length - 1].setElement(css);
            }
        }

        for (let color = 0; color < colorNumber.length; ++color) {
            css = getUniqueCss(Object.keys(enumCard.enumColor)[color], Object.keys(enumCard.enumTypes)[enumCard.enumTypes.TAKI], '_');
            cards.push(new Taki(colorNumber[color], enumCard.enumTypes.TAKI, id++));
            cards[cards.length - 1].setElement(css);
            cards.push(new Taki(colorNumber[color], enumCard.enumTypes.TAKI, id++));
            cards[cards.length - 1].setElement(css);

            css = getUniqueCss(Object.keys(enumCard.enumColor)[color], Object.keys(enumCard.enumTypes)[enumCard.enumTypes.STOP], '_');
            cards.push(new Stop(colorNumber[color], enumCard.enumTypes.STOP, id++));
            cards[cards.length - 1].setElement(css);
            cards.push(new Stop(colorNumber[color], enumCard.enumTypes.STOP, id++));
            cards[cards.length - 1].setElement(css);

            css = getUniqueCss(Object.keys(enumCard.enumColor)[color], Object.keys(enumCard.enumTypes)[enumCard.enumTypes.TWO_PLUS], '_');
            cards.push(new TwoPlus(colorNumber[color], enumCard.enumTypes.TWO_PLUS, id++));
            cards[cards.length - 1].setElement(css);
            cards.push(new TwoPlus(colorNumber[color], enumCard.enumTypes.TWO_PLUS, id++));
            cards[cards.length - 1].setElement(css);

            css = getUniqueCss(Object.keys(enumCard.enumColor)[color], Object.keys(enumCard.enumTypes)[enumCard.enumTypes.PLUS], '_');
            cards.push(new Plus(colorNumber[color], enumCard.enumTypes.PLUS, id++));
            cards[cards.length - 1].setElement(css);
            cards.push(new Plus(colorNumber[color], enumCard.enumTypes.PLUS, id++));
            cards[cards.length - 1].setElement(css);

            css = getUniqueCss('', Object.keys(enumCard.enumTypes)[enumCard.enumTypes.CHANGE_COLOR], '');
            cards.push(new ChangeColorCard(undefined, enumCard.enumTypes.CHANGE_COLOR, id++));
            cards[cards.length - 1].setElement(css);
        }

        css = getUniqueCss('', Object.keys(enumCard.enumTypes)[enumCard.enumTypes.SUPER_TAKI], '');
        for (let color = 0; color < 2; ++color) {
            cards.push(new SuperTaki(undefined, enumCard.enumTypes.SUPER_TAKI, id++));
            cards[cards.length - 1].setElement(css);
        }

        let blue_change_color = document.createElement("img");
        let green_change_color = document.createElement("img");
        let red_change_color = document.createElement("img");
        let yellow_change_color = document.createElement("img");
        blue_change_color.src = "../src/Images/blue/blue_change_color.png";
        green_change_color.src = "../src/Images/green/green_change_color.png";
        red_change_color.src = "../src/Images/red/red_change_color.png";
        yellow_change_color.src = "../src/Images/yellow/yellow_change_color.png";
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function shuffleDeck(shuffleCnt) {
        if (3 * shuffleCnt > cards.length - 1)
            shuffleCnt = (cards.length - 1) / 3;
        for (let i = 0; i < 3 * shuffleCnt; i++) {
            let rndNo = getRandomInt(0, cards.length - 1);
            let Card = cards[i];
            cards[i] = cards[rndNo];
            cards[rndNo] = Card;
        }
    }

    return {
        getCards: function (number) {
            return cards.splice(0, number);
        },

        setGame: function () {
            createDeck();
            shuffleDeck(getRandomInt(10, 25));
        },

        getValidOpenCard: function () {
            for (let i = 0; i < cards.length; ++i) {
                if (cards[i].getSign() === enumCard.enumTypes.NUMBER) {
                    return cards.splice(i, 1);
                }
            }
            return undefined;
        },

        makeStockAgain: function (allCards) {
            let css;
            for (let i = 0; i < allCards.length; ++i) {
                if (allCards[i].getSign() === enumCard.enumTypes.CHANGE_COLOR || allCards[i].getSign() === enumCard.enumTypes.SUPER_TAKI) {
                    allCards[i].setColor(undefined);
                    css = getUniqueCss("", Object.keys(enumCard.enumTypes)[allCards[i].getSign()], '');
                }
                else if (allCards[i].number === undefined)
                    css = getUniqueCss(Object.keys(enumCard.enumColor)[allCards[i].getColor()], Object.keys(enumCard.enumTypes)[allCards[i].getSign()], '_');
                else
                    css = getUniqueCss(Object.keys(enumCard.enumColor)[allCards[i].getColor()], allCards[i].number, '_');
                allCards[i].setElement(css);

                cards.push(allCards[i]);
            }
            shuffleDeck(getRandomInt(10, 25));//random number (the numbers not very important),amount of times to make shuffle
        },

        getLength: function () {
            return cards.length;
        },

        getAllCards: function () {
            return cards;
        },

        changeStockImage: function () {
            let stockHtml = document.getElementById(enumCard.dives.STOCK);
            let stockImage = document.createElement("img");
            while (stockHtml.firstChild) {
                stockHtml.removeChild(stockHtml.firstChild);
            }
            stockHtml.appendChild(stockImage);
            if (stack.getLength() > 30) {
                stockImage.src = enumCard.images.MANY_CLOSE_CARDS;
            }
            else if (stack.getLength() > 10) {
                stockImage.src = enumCard.images.FEW_CLOSE_CARDS;

            }
            else {
                stockImage.src = enumCard.images.CLOSE_CARD;
            }
        }
    };
})();