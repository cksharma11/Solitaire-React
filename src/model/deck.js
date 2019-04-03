import cards from "../data/cards";
import lodash from "lodash";

class Deck{
    constructor(){
        this.cards = cards;
    }

    shuffleDeck(){
        return this.cards = lodash.shuffle(this.cards);
    }

    drawACard(){
        const card = lodash.last(this.cards);
        this.cards.pop();
        return card;
    }

    getDeck(){
        return this.cards;
    }
}

export default Deck;
