import React from "react";
import Card from './Card';

class Deck extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentCard: null
        }
    }

    setCard(showCard) {
        this.setState({
            showCard: showCard
        })
    }

    render() {

        let card = this.props.cards[this.props.cards.length - 1];

        return (
            <div>
                Choose From Deck

                <Card
                    onChosenCard={this.props.onChosenCard}
                    data={card}/>

            </div>
        )
    }

}

export default Deck;