import cards from "../data/cards";
import lodash from "lodash";

class Deck{
    constructor(){
        this.deck = cards;
    }

    shuffleDeck(){
        return lodash.shuffle(this.deck);
    }
}

export default Deck;
