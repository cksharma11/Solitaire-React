import Deck from "./model/deck";
import React from "react";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.deck = new Deck();
  }

  render() {
      return this.createDeckView();
  }

  createDeckView() {
    return <div className="deck"> { this.deck.getDeck().map(card => {
      const color = card.color;
      return <div style={{"color":color}} className="card" >{card.unicode}</div>;
    }) } </div>;
  }
}

export default Game;