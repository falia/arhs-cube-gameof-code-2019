import React from "react";
import Player from './Player';
import Actions from './Actions';
import Deck from './Deck';
import ChooseCard from './ChooseCard';
import Hint from './Hint';
var api = require('../utils/api');

const overlay = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 99,
    backgroundColor: 'transparent'
};

const content = {
    transition: 'all 0.3s',
    backgroundColor: 'white',
    borderRadius: '3px',
    zIndex: 2000,
    position: 'relative',
    boxShadow: '0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)',
    padding: '10px 50px',
    overflow: 'auto'
};

class Game extends React.Component {

    fetchGame() {
        let thisVar = this;
        api.fetchGame().then(function (data) {

            let state = {
                start: true,
                matriceData: data[0],
                player1: {
                    cards: data[1].player1,
                    summary: {
                        score: 0
                    }
                },
                player2: {
                    cards: data[2].player2,
                    summary: {
                        score: 0
                    }
                },
                deck: data[3].deck
            };

            thisVar.setState(state);

        })
    }

    constructor(props) {
        super(props);

        this.state = {
            start : false,

            currentPlayer: 'player2',

            show: false,

            pickFromDeck: false,

            askedCard: null,

    
        };

        this.toggleShow = this.toggleShow.bind(this);
        this.handleChoseCardFromDeck = this.handleChoseCardFromDeck.bind(this);
        this.handleChoseCardFromPlayer = this.handleChoseCardFromPlayer.bind(this);
        this.changeCategory = this.changeCategory.bind(this);
    }

    changeCategory(c) {
        this.setState({
            currentCategory: c
        })
    }

    toggleShow(show) {
        this.setState({show});
    }

    handleChoseCardFromDeck(card) {
        let newDeck = this.removeCard(card, this.state.deck);

        let userCards = [];
        let currentPlayer = "";

        card["status"] = "visible";
        userCards = [].concat(this.state.player2.cards, [card]);
        currentPlayer = 'player2'


        let askedCard = this.state.askedCard;

        console.log("should change turn");
        console.log("input", card);
        console.log("askedCard", askedCard);

        let user = this.state[currentPlayer];

        let data = {
            askedCard: null,
            pickFromDeck: false,
            currentCategory: null,
            deck: newDeck,
            show: false
        };

        data[currentPlayer] = {
            cards: userCards,
            summary: user.summary
        };

        if (!(card.category.id == askedCard.category.id && card.subject.id == askedCard.subject.id)) {
            console.log("change turn");
            data["currentPlayer"] = 'player1';
            console.log(data);
            this.setState(data, this.checkWhoOne.bind(this) && this.lucaPlayWithTimeOut.bind(this));
        } else {
            console.log("continue");
            this.setState(data, this.checkWhoOne.bind(this));
        }
    }

    handleChoseCardFromPlayer(card) {
        let p1 = this.state.player1;
        let p2 = this.state.player2;

        let cardFound = this.checkCard(card, this.state.player1.cards);

        if (cardFound) {
            console.log("found card in p1");

            this.toggleShow(false);

            card["status"] = "visible";
            let add = [].concat(this.state.player2.cards, [card]);


            console.log(this.state.player1.cards);
            let remove = this.removeCard(card, this.state.player1.cards);
            console.log(remove);

            this.setState({
                player1: {
                    cards: remove,
                    summary: p1.summary
                },
                player2: {
                    cards: add,
                    summary: p2.summary
                }
            }, this.checkWhoOne.bind(this));
        } else {
            this.setState({
                askedCard: card,
                pickFromDeck: true,
                message: "I don't have this card"
            }, this.checkWhoOne.bind(this));
        }

    }

    removeCard(card, array) {
        let filtered = array.filter(i => {
            return ( i.category.id != card.category.id || i.subject.id != card.subject.id)
        });

        return filtered;
    }

    checkCard(card, cards) {
        const foundCards = cards.filter(val => {
            return card.category.id == val.category.id && card.subject.id == val.subject.id
        });

        if (foundCards && foundCards.length > 0) {
            return foundCards[0];
        } else {
            return null;
        }
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    randomCard() {
        let category = this.getRandomInt(this.state.matriceData.length);
        let subject = this.getRandomInt(this.state.matriceData[category].subjects.length);

        let card = {
            category: this.state.matriceData[category],
            subject: this.state.matriceData[category].subjects[subject]
        };

        return card;
    }

    lucaPlayWithTimeOut() {
        setTimeout(this.lucaPlay.bind(this), 5000)
    }

    lucaPlay() {
        let msg = "LUCA is playing !.";

        let p1 = this.state.player1;
        let p2 = this.state.player2;

        let luca = this.state.player1;

        let card = this.randomCard();

        let cardFound = this.checkCard(card, this.state.player1.cards);

        if (cardFound) {
            let add = [].concat(this.state.player1.cards, [cardFound]);

            console.log("my cards", this.state.player2.cards);
            let remove = this.removeCard(cardFound, this.state.player2.cards);
            console.log("my cards", remove);
            msg = msg + " Great You have card.";

            this.setState({
                message: msg,
                player1: {
                    cards: add,
                    summary: p1.summary
                },
                player2: {
                    cards: remove,
                    summary: p2.summary
                }
            }, this.checkWhoOne.bind(this) && this.lucaPlayWithTimeOut);
        } else {

                msg = msg + " You do not have the card I asked, so I picked one from the deck.";

                let deckCard = this.state.deck[this.state.deck.length - 1];


                let newDeck = this.removeCard(deckCard, this.state.deck);
                let lucaCards = [].concat(this.state.player1.cards, [deckCard]);

                let data = {
                    askedCard: null,
                    pickFromDeck: false,
                    currentCategory: null,
                    deck: newDeck,
                    player1: {
                        cards: lucaCards,
                        summary: luca.summary
                    }
                };

                if (!(deckCard.category.id == card.category.id && deckCard.subject.id == card.subject.id)) {
                    msg = msg + " The card from the deck is different. Your turn !";

                    console.log("change turn");
                    data["currentPlayer"] = "player2";
                    console.log(data);
                    data["message"] = msg;
                    this.setState(data, this.checkWhoOne.bind(this));
                } else {
                    console.log("continue");
                    msg = msg + " The card from the deck is the one I asked !!";
                    data["message"] = msg;
                    this.setState(data, this.checkWhoOne.bind(this) && this.lucaPlayWithTimeOut);
                }

        }
    }

    checkWhoOne() {
        if (this.state.deck.length === 0) {
            alert("End.")
        } else {

        }
    }

    render() {

        return (


            <div className='container'>


                {this.state.start &&

                <div className="game">
                    <div className="roof"></div>
                    <Player key="pc" data={this.state.player1}/>

                    <Hint message={this.state.message}/>

                    <div className="board-no-mans-land">
                        Your turn: {
                        this.state.currentPlayer === 'player1' ? 'LU-CA' : "MAX"
                    }

                    </div>

                    <Player key="max" data={this.state.player2}/>

                    {this.state.currentPlayer == 'player2' &&
                    <Actions
                        show={this.state.show}
                        handleToggle={this.toggleShow}>

                        {this.state.pickFromDeck && <Deck
                            cards={this.state.deck}
                            onChosenCard={this.handleChoseCardFromDeck}
                            handleToggle={this.toggleShow}></Deck>}

                        {!this.state.pickFromDeck && <ChooseCard
                            matriceData={this.state.matriceData}
                            onChosenCard={this.handleChoseCardFromPlayer}
                            handleToggle={this.toggleShow}
                            currentCategory={this.state.currentCategory}
                            changeCategory={this.changeCategory}></ChooseCard>}

                    </Actions>
                    }

                </div>
                }

                {! this.state.start && <button className="button button-start" onClick={e=> this.fetchGame()}>
                    Start
                </button>}

            </div>
        )
    }
}

export default Game;