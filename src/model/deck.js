import cards from "../data/cards";
import lodash from "lodash";

class Deck {
  constructor() {
    this.cards = cards;
    this.piles = this.createInitialPiles();
  }

  shuffleDeck() {
    return (this.cards = lodash.shuffle(this.cards));
  }

  drawACard() {
    return this.cards.pop();
  }

  getDeck() {
    return this.cards;
  }

  createInitialPiles() {
    const piles = {};
    this.shuffleDeck();
    for (let count = 1; count < 8; count++) {
      piles[count] = this.cards.splice(0, count);
    }
    return piles;
  }

  isDraggable(draggedCard, inPlaceCard) {
    return (
      draggedCard.number === inPlaceCard.number - 1 &&
      draggedCard.color !== inPlaceCard.color
    );
  }

  getPiles(){
      return this.piles;
  }
}

export default Deck;
