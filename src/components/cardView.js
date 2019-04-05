import React from "react";

class CardView extends React.Component {
  render() {
    return this.createCardView();
  }

  createCardView() {
    return (
      <div
        draggable
        onDragStart={this.props.onDragStart}
        onDragOver={this.props.onDragOver}
        onDrop={this.props.onDrop}
        style={{ color: this.props.card.getColor() }}
        className={this.props.className || "card"}
        id={this.props.id}
      >
        {this.props.card.getUnicode()}
      </div>
    );
  }
}

export default CardView;
