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
    return this.createGameView();
  }

  createGameView() {
    return (
      <div className="deck">
        <div className="pile">
          <div className="flex-wrap">
            <div 
                onClick={this.drawACard.bind(this)} 
                className="card">
                {DECK_UNICODE}
            </div>
            <div 
                id="available-card" 
                style={{"color":this.state.availaleCard.color}} 
                draggable 
                className="card">
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
            {this.createPilesView()}
        </div>
      </div>
    );
  }

  createPilesView(){
      const element = [];
      for(let index = 1; index < 8; index++){
        element.push(
            <div 
                id={"pile"+{index}} 
                className="pile-column">
                {this.createPileView(this.state.piles[index])}
            </div>
        );
      }
      return element;
  }

  createPileView(pile){
    const view = pile.map((card,index) =>{
        if(index === 0) {
         return <div 
                    draggable 
                    style={ {"color" : card.color } } 
                    className="card adjustable-card">
                    {card.unicode}
                </div>
        }
        return <div 
                    className="card adjustable-card">
                    {DECK_UNICODE}
                </div>
    })
    return view.reverse();
  } 

  drawACard() {
    const card = this.deck.drawACard();
    return this.setState({ availaleCard: card });
  }
}

export default Game;
