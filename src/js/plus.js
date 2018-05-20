class Plus extends Card{

    constructor(theColor, theSign, theId){
        super(theColor, theSign, theId);
    }

    doOperation() {
        return enumCard.enumResult.EXTRA_TURN;
    }

    doValidation(lastCard) {
        return !lastCard.isActive() && (lastCard.getColor() === this.getColor() || lastCard.getSign() === this.getSign());
    }
}