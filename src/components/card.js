import React from "react";

class Card extends React.Component{
    constructor(props){
        super(props);
        this.onDragStart = props.onDragStart;
        this.id = props.id;
        this.color = props.color;
        this.isDraggable = props.isDraggable;
        this.className = props.className;
        this.unicode = props.unicode;
    }

    render(){
        return this.createCardView();
    }

    createCardView(){
        return (
            <div 
                onDragStart={this.onDragStart}
                id={this.id}
                style={{"color":this.color}}
                draggable={this.isDraggable}
                className={this.className}>
                {this.unicode}
            </div>
        )
    }
}

export default Card;