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

  shiftPileCards(numberOfCards, currentPile, nextPile) {
    const draggedCards = this.piles[currentPile].removeFaceUpCards(numberOfCards);
    this.piles[nextPile].addFaceUpCards(draggedCards);
  }

  addCardToFoundation(card, foundation) {
    this.foundations[foundation].addCard(card);
  }

  addWastePileCardToPile(pileNumber) {
    const card = this.wastePile.removeTopCard();
    this.piles[pileNumber].addFaceUpCards([card]);
  }

  isDraggableCard(draggedCard, inPlaceCard) {
    return (
      draggedCard.getNumber() === inPlaceCard.getNumber() - 1 &&
      draggedCard.getColor() === inPlaceCard.getColor()
    );
  }
}

export default Game;
