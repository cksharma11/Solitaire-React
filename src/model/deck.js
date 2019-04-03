import cards from "../data/cards";
import lodash from "lodash";

class Deck {
  constructor() {
    this.cards = cards;
  }

  shuffleDeck() {
    return (this.cards = lodash.shuffle(this.cards));
  }

  drawACard() {
    const card = lodash.last(this.cards);
    this.cards.pop();
    return card;
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
    //   console.log(draggedCard, inPlaceCard);
      console.log(draggedCard.number === inPlaceCard.number - 1 &&
        draggedCard.color !== inPlaceCard.color)
    return (
      draggedCard.number === inPlaceCard.number - 1 &&
      draggedCard.color !== inPlaceCard.color
    );
  }
}

export default Deck;
