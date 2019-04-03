import Deck from "./model/deck";
import React from "react";

const DECK_UNICODE = "\u{1F0A0}";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.deck = new Deck();
    this.state = { availaleCard: this.deck.drawACard(), piles: this.deck.createInitialPiles() };
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
            <div id="suit1" className="card" />
            <div id="suit2" className="card" />
            <div id="suit3" className="card" />
            <div id="suit4" className="card" />
          </div>
        </div>
        <div className="piles-area">
              <div id="pile1" className="pile-column">{this.createPileView(this.state.piles[1])}</div>
              <div id="pile2" className="pile-column">{this.createPileView(this.state.piles[2])}</div>
              <div id="pile3" className="pile-column">{this.createPileView(this.state.piles[3])}</div>
              <div id="pile4" className="pile-column">{this.createPileView(this.state.piles[4])}</div>
              <div id="pile5" className="pile-column">{this.createPileView(this.state.piles[5])}</div>
              <div id="pile6" className="pile-column">{this.createPileView(this.state.piles[6])}</div>
              <div id="pile7" className="pile-column">{this.createPileView(this.state.piles[7])}</div>
          </div>
      </div>
    );
  }

  createPileView(pile){
     const view = pile.map(card => 
         <div draggable style={{"color":card.color}} className="card">{card.unicode}</div>
     )
     return view;
  } 

  drawACard() {
    const card = this.deck.drawACard();
    return this.setState({ availaleCard: card });
  }
}

export default Game;
