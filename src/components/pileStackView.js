import React from "react";
import CardView from "./cardView";
import { FACE_DOWN_UNICODE } from "../constant/constants";

class PileStackView extends React.Component {
  render() {
    return this.createStackPileView();
  }

  createStackPileView() {
    const allPiles = Object.keys(this.props.piles).map(index => {
      return this.createSinglePileView(this.props.piles[index], index);
    });

    return <div className="pile-area">{allPiles}</div>;
  }

  createSinglePileView(pile, pileNumber) {
    return (
      <div className="pile">
        {this.createFaceDownCardView(pile, pileNumber)}
        {this.createFaceUpCardView(pile, pileNumber)}
      </div>
    );
  }

  createFaceUpCardView(pile, pileNumber) {
    let count = pile.getFaceUpCards().length;
    const view = pile.getFaceUpCards().map((card, index) => {
      const id = this.getID(pileNumber, card, count, index);
      return this.createCardView(card, id);
    });
    return view;
  }

  createFaceDownCardView(pile, pileNumber) {
    const view = pile.getFaceDownCards().map((card, index) => {
      if (card.getNumber() === 0) {
        const id = this.getID(pileNumber, card, 1, index);
        return this.createCardView(card, id);
      }
      return <div className="card adjustable-card">{FACE_DOWN_UNICODE}</div>;
    });
    return view;
  }

  createCardView(card, id) {
    return (
      <CardView
        card={card}
        id={id}
        onDragStart={this.props.onDragStart}
        onDrop={this.props.onDrop}
        onDragOver={this.props.onDragOver}
      />
    );
  }

  getID(pileNumber, card, count, index) {
    return `pile_${pileNumber}_${count - index}_${card.suit}_${card.color}_${card.number}_${
      card.unicode
    }`;
  }
}

export default PileStackView;
