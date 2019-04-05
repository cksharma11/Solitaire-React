import React from "react";
import WastePileView from "./wastePileView";
import PileStackView from "./pileStackView";
import FoundationView from "./foundationView";

class GameView extends React.Component {
  constructor(props) {
    super(props);
    this.game = props.game;
    this.state = { game: props.game };
  }

  render() {
    return (
      <div>
        <div className="header">
          <WastePileView
            wastePile={this.game.getWastePile()}
            onClick={this.drawCard.bind(this)}
            piles={this.game.getPiles()}
            onDragStart={this.drag.bind(this)}
            onDragOver={this.allowDrop.bind(this)}
            onDrop={this.drop.bind(this)}
          />
          <FoundationView
            foundations={this.game.getFoundations()}
            onDragOver={this.allowDrop.bind(this)}
            onDrop={this.drop.bind(this)}
          />
        </div>
        <PileStackView
          piles={this.game.getPiles()}
          onDragStart={this.drag.bind(this)}
          onDragOver={this.allowDrop.bind(this)}
          onDrop={this.drop.bind(this)}
        />
      </div>
    );
  }

  drawCard() {
    this.game.drawCard();
    this.setState({ game: this.game });
  }

  allowDrop(event) {
    event.preventDefault();
  }

  drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }

  drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const numberOfCardsToShift = +data.split("_")[1];
    const currentPileNumber = +data.split("_")[0];
    const nextPileNumber = +event.target.id.split("_")[0];

    if (data === "face-up-card") {
      this.game.addWastePileCardToPile(nextPileNumber);
    } else {
      this.shiftPileCards(numberOfCardsToShift, currentPileNumber, nextPileNumber);
    }
    this.setState({ game: this.game });
  }

  shiftPileCards(numberOfCardsToShift, currentPileNumber, nextPileNumber) {
    this.game.shiftPileCards(numberOfCardsToShift, currentPileNumber, nextPileNumber);
    if(this.game.piles[currentPileNumber].getFaceUpCards().length > 0 ) return;
    this.game.piles[currentPileNumber].addFaceUpCard();
  }
}

export default GameView;
