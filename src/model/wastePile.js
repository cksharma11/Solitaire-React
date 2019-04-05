class WastePile {
  constructor(cards) {
    this.wasteCards = cards;
    this.drawCards = [];
  }

  getFaceUpCard() {
    if (this.drawCards.length === 0) {
      this.drawCard();
    }
    return this.drawCards[0];
  }

  getWastePile() {
    return this.wasteCards;
  }

  drawCard() {
    this.drawCards.unshift(this.wasteCards.pop());
  }

  removeTopCard(pileNumber) {
    return this.drawCards.pop();
  }
}

export default WastePile;
