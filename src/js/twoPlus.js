import Card from "./card";
import {enumCard} from './enumCard'
export default class TwoPlus extends Card{

    constructor(theColor, theSign, theId){
        super(theColor, theSign, theId,10);
    }

    doOperation() {
        this.setActive(true);
        return enumCard.enumResult.NEXT_TURN;
    }

    doValidation(lastCard) {
        return (lastCard.getColor() === this.getColor() || lastCard.getSign() === this.getSign());
    }
}