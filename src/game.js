import Deck from "./model/deck";
import React from "react";

const DECK_UNICODE = "\u{1F0A0}";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.deck = new Deck();
    this.availaleCard = this.deck.drawACard();
    this.state = { availaleCard: this.availaleCard };
  }

  render() {
    return this.createDeckView();
  }

  createDeckView() {
    return (
      <div className="deck">
        <div className="pile">
          <div className="flex-wrap">
            <div onClick={this.drawACard.bind(this)} className="card">
              {DECK_UNICODE}
            </div>
            <div id="available-card" style={{"color":this.state.availaleCard.color}} draggable className="card">
              {this.state.availaleCard.unicode}
            </div>
          </div>

          <div className="flex-wrap">
            <div id="pile1" className="card" />
            <div id="pile2" className="card" />
            <div id="pile3" className="card" />
            <div id="pile4" className="card" />
          </div>
        </div>
      </div>
    );
  }

  drawACard() {
    const card = this.deck.drawACard();
    return this.setState({ availaleCard: card });
  }
}

export default Game;
