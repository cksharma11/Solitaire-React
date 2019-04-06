import { PLACE_WASTE_PILE, PLACE_PILE } from "../constant/constants";

class Game {
  constructor(wastePile, piles, foundations) {
    this.wastePile = wastePile;
    this.piles = piles;
    this.foundations = foundations;
  }

  getDeck() {
    return this.deck;
  }

  getWastePile() {
    return this.wastePile;
  }

  getPiles() {
    return this.piles;
  }

  getFoundations() {
    return this.foundations;
  }

  drawCard() {
    this.wastePile.drawCard();
  }

  shiftCardFromPileToPile(numberOfCards, currentPile, nextPile) {
    const draggedCards = this.piles[currentPile].removeFaceUpCards(numberOfCards);
    this.piles[nextPile].addFaceUpCards(draggedCards);

    this.addNewFaceUpCardToPile(currentPile);
  }

  addNewFaceUpCardToPile(currentPile) {
    if (this.piles[currentPile].getFaceUpCards().length > 0) return;
    this.piles[currentPile].addFaceUpCard();
  }

  addCardToFoundation(card, foundation) {
    this.foundations[foundation].addCard(card);
  }

  addWastePileCardToPile(pileNumber) {
    const card = this.wastePile.removeTopCard();
    this.piles[pileNumber].addFaceUpCards([card]);
  }

  shiftCardFromWastePileToPile(destinationPile) {
    const card = this.wastePile.shiftDrawCards();
    this.piles[destinationPile].getFaceUpCards().push(card);
  }

  shiftCardToFoundation(card, foundation, cardSource, destinationPile) {
    if (!this.isAddableToFoundation(card, this.foundations[foundation])) return;
    if (cardSource === PLACE_PILE) {
      this.piles[destinationPile].removeFaceUpCards(1);
      this.addNewFaceUpCardToPile(destinationPile);
    }
    if (cardSource === PLACE_WASTE_PILE) this.wastePile.shiftDrawCards();
    this.foundations[foundation].addCard(card);
  }

  isDraggableCard(draggedCard, inPlaceCard) {
    return (
      draggedCard.getNumber() === inPlaceCard.getNumber() - 1 &&
      draggedCard.getColor() !== inPlaceCard.getColor()
    );
  }

  isAddableToFoundation(card, foundation) {
    if (foundation.getTopCard().getNumber() === 0) return card.getNumber() === 1;
    return (
      card.getNumber() === foundation.getTopCard().getNumber() + 1 &&
      card.getSuit() === foundation.getTopCard().getSuit()
    );
  }
}

export default Game;
