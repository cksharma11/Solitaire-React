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
                onDragStart={this.drag.bind(this)}
                id={this.state.availaleCard.type+"_"+this.state.availaleCard.color+"_"+this.state.availaleCard.number} 
                style={{"color":this.state.availaleCard.color}} 
                draggable 
                className="card">
                {this.state.availaleCard.unicode}
            </div>
          </div>

          <div className="flex-wrap">
            <div id="suit1" className="card" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)}/>
            <div id="suit2" className="card" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)}/>
            <div id="suit3" className="card" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)}/>
            <div id="suit4" className="card" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)}/>
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
        const id = `${card.type}_${card.color}_${card.number}`;
        if(index === 0) {
         return <div 
                    key={id}
                    id={id}
                    onDragStart={this.drag.bind(this)}
                    onDrop={this.drop.bind(this)} 
                    onDragOver={this.allowDrop.bind(this)}
                    draggable 
                    style={ {"color" : card.color } } 
                    className="card adjustable-card">
                    {card.unicode}
                </div>
        }
        return <div 
                    id={id}
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

  allowDrop(event) {
    this.inPlaceCard = this.createCardJson(event.target.id);
    if(this.deck.isDraggable(this.draggedCard, this.inPlaceCard)){
        event.preventDefault();
    }
  }
  
  drag(event) {
    this.draggedCard = this.createCardJson(event.target.id);
    event.dataTransfer.setData("text", event.target.id);
  }
  
  drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
  }

  createCardJson(eventID){
    //   console.log(eventID);
    return {
        type : eventID.split("_")[0],
        color : eventID.split("_")[1],
        number : +eventID.split("_")[2],
    }
  }
}

export default Game;
