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
    if(this.wasteCards.length === 0) {
      this.wasteCards = this.drawCards;
      this.drawCards = [];
    }
    this.drawCards.unshift(this.wasteCards.pop());
  }

  getDrawCards(){
    return this.drawCards;
  }

  shiftDrawCards(){
    return this.drawCards.shift();
  }

  removeTopCard(pileNumber) {
    return this.drawCards.pop();
  }
}

export default WastePile;
