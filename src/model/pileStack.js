class PileStack {
  constructor(faceUpCards, faceDownCards) {
    this.faceUpCards = faceUpCards;
    this.faceDownCards = faceDownCards;
  }

  getFaceUpCards() {
    return this.faceUpCards;
  }

  getFaceDownCards() {
    return this.faceDownCards;
  }

  addFaceUpCards(cards) {
    cards.forEach(card => {
      this.faceUpCards.push(card);
    });
  }

  removeFaceUpCards(numberOfCards) {
    return this.faceUpCards.splice(0, numberOfCards);
  }

  addFaceUpCard() {
    this.faceUpCards.push(this.faceDownCards.pop());
  }
}

export default PileStack;
