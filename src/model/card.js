class Card{
    constructor(cardDetails){
        this.suit = cardDetails.suit;
        this.number = cardDetails.number;
        this.color = cardDetails.color;
        this.unicode = cardDetails.unicode;
    }

    getUnicode(){
        return this.unicode;
    }

    getColor(){
        return this.color;
    }
}

export default Card;