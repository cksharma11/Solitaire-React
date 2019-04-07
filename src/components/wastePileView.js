import React from "react";
import CardView from "./cardView";
import FaceDownCard from "./faceDownCard";

class WastePileView extends React.Component {
  render() {
    return this.createWastePileView();
  }

  createWastePileView() {
    return (
      <div className="waste-pile">
        {this.createFaceDownCardView()}
        {this.createFaceUpCardView()}
      </div>
    );
  }

  createFaceDownCardView() {
    return (
      <FaceDownCard onClick={this.props.onClick} className="card stable-card"/>
    );
  }

  createFaceUpCardView() {
    const card= this.props.wastePile.getFaceUpCard();
    const id =`waste-pile___${card.suit}_${card.color}_${card.number}_${
      card.unicode
    }`;
    return (
      <CardView
        card={this.props.wastePile.getFaceUpCard()}
        onDragStart={this.props.onDragStart}
        onDragOver={this.props.onDragOver}
        onDrop={this.props.onDrop}
        id={id}
        className="card stable-card"
      />
    );
  }
}

export default WastePileView;
