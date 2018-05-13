class TwoPlus extends Card{

    constructor(theColor, theSign, theId){
        super(theColor, theSign, theId);
    }

    doOperation(player) {
        this.setActive(true);
        return enumCard.enumResult.NEXT_TURN;
    }

    doValidation(lastCard) {
        return (lastCard.getColor() === this.getColor() || lastCard.getSign() === this.getSign());
    }
}