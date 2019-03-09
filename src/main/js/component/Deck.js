import React from "react";
import Card from './Card';

class Deck extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentCard: null,
        };

        this.handleDeckClick = this.handleDeckClick.bind(this);
    }

    handleDeckClick(card) {
        if(!this.state.currentCard) {
            card["status"] = "visible";

            this.setState({
                currentCard: card
            })
        } else {
            this.props.onChosenCard(card);
        }
    }

    render() {
        return (
            <div>
                <h5>Choose From Deck</h5>
                <hr/>
                <Card
                    onChosenCard={this.handleDeckClick}
                    data={this.props.cards[this.props.cards.length-1]}/>

            </div>
        )
    }

}

export default Deck;