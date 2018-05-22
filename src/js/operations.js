












/*function pullApproval(cards, lastCard) {
    for(var i = 0; i < cards.length; ++i){
        if(cards[i].doValidation(lastCard))
            return false;
    }
    return true;
}*/

function takiModeChecker(cards, takiMode) {
    let foundColor = false;
    for (let i = 0; i < cards.length; ++i) {
        if (cards[i].getColor() === takiMode.getColor()) {
            foundColor = true;
            break;
        }
    }

    return foundColor;
}

/*function removeCard(cards, card) {
    for (var i = 0; i < cards.length; ++i) {
        if (cards[i] === card) {
            cards.splice(i, 1);
        }
    }
}*/

/*function searchCard(cards, id) {
    for (var i = 0; i < cards.length; ++i) {
        if (cards[i].getId().toString() === id) {
            return cards[i];
        }
    }
    return undefined;
}*/

function removeAllCards(placeHOlder) {
    let deleteElement = document.getElementById(placeHOlder);

    while (deleteElement.hasChildNodes()) {
        deleteElement.removeChild(deleteElement.childNodes[0]);
    }
}

function getUniqueCss(color,type,separator){
    return color.concat(separator).concat(type);
}

function setCards(stock, cards) {
    for(let i = 0; i < cards.length; ++i){
        stock.push(cards[i]);
        // cards[i].changeImage(true);
    }
}

function takeCards(stock, cardsToTake) {
    for(let i = 0; i < cardsToTake.length; ++i){
        stock.push(cardsToTake[i]);
    }
}

function takiPermission(player, card) {
    let taki = player.getTakiMode();
    return ( taki === undefined || (taki !== undefined && taki.getColor() === card.getColor()));
}

function changeMerging(placeHolder, cardsLength){
    let images = placeHolder.getElementsByTagName("img");
    let factor = 0;
    let size;
    if(window.innerWidth < 720)
        factor -= 4;
    else if(window.innerWidth < 760)
        factor -= 3;
    else if(window.innerWidth < 780)
        factor -= 2;
    if(cardsLength > 21)
        size = -7;
    else if(cardsLength > 18)
        size = -6.5;
    else if(cardsLength > 15)
        size = -6;
    else if(cardsLength > 12)
        size = -5.5;
    else
        size = -5;
    size += factor;
    let marge = size.toString() + "%";
    for (let i = 0; i < images.length; i++) {
        images[i].style.marginRight= marge;
    }
}

export {takiModeChecker, getUniqueCss, setCards, takeCards, takiPermission}