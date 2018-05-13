class Card{


    constructor (theColor, theSign, theId){
        this.color = theColor;
        this.sign = theSign;
        this.active = false;
        this.id = theId;
        this.htmlCard = undefined;
        this.uniqueCardImage = undefined;
        this.closeCardImage = undefined;
    }


    setUniqueImage(imgName) {
        let colorName;
        if( this.color !== undefined)
            colorName = Object.keys(enumCard.enumColor)[this.color].toLowerCase();
        else
            colorName = "other";
        this.uniqueCardImage.setAttribute("src", "../Images/" + colorName + "/" + imgName.toLowerCase() + ".png");

    }

    setHtmlElement(imgName) {
        this.htmlCard = document.createElement("a");
        this.htmlCard.setAttribute("id", this.id);
        this.closeCardImage =  document.createElement("img");
        this.closeCardImage.src = enumCard.images.CLOSE_CARD;
        this.uniqueCardImage = document.createElement("img");
        this.setUniqueImage(imgName);
    }

    setHtmlEvent(draggable) {
        this.htmlCard.ondragstart = function (event) {
            let pickColorId = document.getElementById(enumCard.dives.PICK_COLOR);
            if(!draggable || pickColorId.style.visibility === "visible")
                return false;
            this.draggable = true;
            event.dataTransfer.setData("Text", this.id);
        };
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

    setParent (parentHolder, draggable) {
        document.getElementById(parentHolder).appendChild(this.htmlCard);
        this.setHtmlEvent(draggable);
    }

    setElement (theUniqueCard) {
        this.setHtmlElement(theUniqueCard);
        this.setHtmlEvent(false);
        document.getElementById(enumCard.dives.STOCK).appendChild(this.htmlCard);
    };

    changeImage (openCard){
        while (this.htmlCard.firstChild) {
            this.htmlCard.removeChild(this.htmlCard.firstChild);
        }
        if(openCard)
            this.htmlCard.appendChild(this.uniqueCardImage);
        else
            this.htmlCard.appendChild(this.closeCardImage);
    };

    getSign (){
        return this.sign;
    };

    getColor () {
        return this.color;
    };

    getElement() {
        return this.htmlCard;
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