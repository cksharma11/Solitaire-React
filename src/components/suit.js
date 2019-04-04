import React from "react";
import ReactDOM from "react-dom";

class Suit extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.className = props.className;
    this.onDrop = props.onDrop;
    this.onDrapOver = props.onDrapOver;
    this.unicode = props.unicode;
  }

  render() {
    return (
      <div
        id={this.props.id}
        className={this.props.className}
        onDrop={this.props.onDrop}
        onDragOver={this.props.onDragOver}
      >
      {this.props.unicode}
      </div>
    );
  }
}

export default Suit;