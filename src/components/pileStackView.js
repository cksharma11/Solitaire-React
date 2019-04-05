import React from "react";
import CardView from "./cardView";
const FACE_DOWN_UNICODE = "\u{1F0A0}";

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
      const id = `${pileNumber}_${count - index}`;
      return (
        <CardView
          card={card}
          id={id}
          onDragStart={this.props.onDragStart}
          onDrop={this.props.onDrop}
          onDragOver={this.props.onDragOver}
        />
      );
    });
    return view;
  }

  createFaceDownCardView(pile, pileNumber) {
    const view = pile.getFaceDownCards().map((card, index) => {
      return <div className="card adjustable-card">{FACE_DOWN_UNICODE}</div>;
    });
    return view;
  }
}

export default PileStackView;
