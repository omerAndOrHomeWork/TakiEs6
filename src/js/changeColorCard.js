import Card from "./card";
export default class ChangeColorCard extends Card{

    constructor(theColor, theSign, theId){
        super(theColor, theSign, theId);
    }

    doOperation(player) {
        return player.pickColor();
    }

    doValidation(lastCard) {
        return !lastCard.isActive();
    }
}