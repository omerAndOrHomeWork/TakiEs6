import {enumCard} from './enumCard'

export default class Card{

    constructor (theColor, theSign, theId, theScore){
        this.color = theColor;
        this.sign = theSign;
        this.active = false;
        this.id = theId;
        this.score = theScore;
        this.htmlCard = undefined;
        this.uniqueCardImage = undefined;
        this.closeCardImage = undefined;
        this.currentParent = undefined;
    }

    setUniqueImage(imgName) {
        let colorName;
        if( this.color !== undefined)
            colorName = Object.keys(enumCard.enumColor)[this.color].toLowerCase();
        else
            colorName = "other";
        this.uniqueCardImage = "../src/Images/" + colorName + "/" + imgName.toLowerCase() + ".png";
    }

    get HtmlCard() {
        return this.htmlCard;
    }

    isActive (){
        return this.active;
    }

    getId() {
        return this.id;
    }

    setElement (theUniqueCard) {
        this.setUniqueImage(theUniqueCard);
    };

    getSign (){
        return this.sign;
    };

    getColor () {
        return this.color;
    };

    setColor(theColor) {
        this.color = theColor;
    };

    setImage(imgName) {
        this.setUniqueImage(imgName);
    };

    setActive(activeness) {
        this.active = activeness;
    };
}