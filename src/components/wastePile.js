import React from "react";

const DECK_UNICODE = "\u{1F0A0}";

class WastePile extends React.Component{
    constructor(props){
        super(props);
        this.unicode = DECK_UNICODE;
        this.onClick = props.onClick;
        this.className = props.className;       
    }

    render(){
        return this.createWastePileView();
    }

    createWastePileView(){
        return (
            <div 
                onClick={this.onClick}
                className={this.className}>
                {this.unicode}
            </div>
        )
    }
}

export default WastePile;