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
        {
          <div className="pile">
            <div onClick={this.drawACard.bind(this)} className="card">
              {DECK_UNICODE}
            </div>
            <div className="card">{this.state.availaleCard.unicode}</div>
          </div>
        }
      </div>
    );
  }

  drawACard() {
    return this.setState({ availaleCard: this.deck.drawACard() });
  }
}

export default Game;
