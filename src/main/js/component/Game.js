import React from "react";
import Player from './Player';
import Actions from './Actions';
import Deck from './Deck';
import ChooseCard from './ChooseCard';

class Game extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentPlayer: 'player2',

            matriceData: [
                {
                    id: 1,
                    title: "Economy",
                    icon: "/icons/icon-category-economy.png",
                    color: "#e9c996",
                    subjects: [
                        {
                            id: 1,
                            title: "S1",
                            thumbnail: "/thumbnails/1877-01-07_01-00001.jpg"
                        },
                        {
                            id: 2,
                            title: "S2",
                            thumbnail: "/thumbnails/1877-01-13_01-00001.jpg"
                        },
                        {
                            id: 3,
                            title: "S3",
                            thumbnail: "/thumbnails/1877-02-03_01-00001.jpg"
                        }
                    ]
                },

                {
                    id: 2,
                    title: "Politics",
                    icon: "/icons/icon-category-politic.png",
                    color: "#a5aee3",
                    subjects: [
                        {
                            id: 1,
                            title: "S1",
                            thumbnail: "/thumbnails/1877-01-09_01-00001.jpg"
                        },
                        {
                            id: 2,
                            title: "S2",
                            thumbnail: "/thumbnails/1877-02-10_01-00001.jpg"
                        },
                        {
                            id: 3,
                            title: "S3",
                            thumbnail: "/thumbnails/1877-09-30_01-00001.jpg"
                        }
                    ]
                },

                {
                    id: 3,
                    title: "Sports",
                    icon: "/icons/icon-category-sport.png",
                    color: "#74c764",
                    subjects: [
                        {
                            id: 1,
                            title: "S1",
                            thumbnail: "/thumbnails/1877-10-20_01-00001.jpg"
                        },
                        {
                            id: 2,
                            title: "S2",
                        },
                        {
                            id: 3,
                            title: "S3",
                        }
                    ]
                },

                {
                    id: 4,
                    title: "Technology",
                    icon: "/icons/icon-category-technology.png",
                    color: "#836123",
                    subjects: [
                        {
                            id: 1,
                            title: "S1",
                        },
                        {
                            id: 2,
                            title: "S2",
                        },
                        {
                            id: 3,
                            title: "S3",
                        }
                    ]
                },
            ],

            player1: {
                cards: [
                    {
                        category: {
                            id: 1,
                            title: "Economy",
                            icon: "/icons/icon-category-economy.png",
                            color: "#e9c996",
                        },
                        subject: {
                            id: 1,
                            title: "S1",
                            thumbnail: "/thumbnails/1877-01-07_01-00001.jpg"
                        },
                        status: "hidden"
                    },
                    {
                        category: {
                            id: 2,
                            title: "Politics",
                            icon: "/icons/icon-category-politic.png",
                            color: "#a5aee3",
                        },
                        subject: {
                            id: 1,
                            title: "S1",
                            thumbnail: "/thumbnails/1877-01-09_01-00001.jpg"
                        },
                        status: "hidden"
                    }
                ],

                summary: {
                    score: 0
                }
            },

            player2: {
                cards: [
                    {
                        category: {
                            id: 3,
                            title: "Sports",
                            icon: "/icons/icon-category-sport.png",
                            color: "#74c764",
                        },
                        subject: {
                            id: 1,
                            title: "S1",
                            thumbnail: "/thumbnails/1877-10-20_01-00001.jpg"
                        },
                        status: "visible"
                    },
                    {
                        category: {
                            id: 2,
                            title: "Politics",
                            icon: "/icons/icon-category-politic.png",
                            color: "#a5aee3",
                        },
                        subject: {
                            id: 2,
                            title: "S2",
                            thumbnail: "/thumbnails/1877-02-10_01-00001.jpg"
                        },
                        status: "visible"
                    }
                ],

                summary: {
                    score: 0
                }
            },

            deck: [
                {
                    category: "C1",
                    subject: "S3",
                    status: "hidden"
                },
                {
                    category: "C2",
                    subject: "S3",
                    status: "hidden"
                }
            ],

            show: false,

            pickFromDeck: false,

            currentCategory: null,

            bubbleText: "",
            showBubble: false
        };

        this.toggleShow = this.toggleShow.bind(this);
        this.handleChoseCard = this.handleChoseCard.bind(this);
        this.changeCategory = this.changeCategory.bind(this);
        this.displayNotice = this.displayNotice.bind(this);
    }

    changeCategory(c) {
        this.setState({
            currentCategory: c
        })
    }

    toggleShow(show) {
        this.setState({show});
    }

    displayNotice(message) {
        this.setState({bubbleText: message, showBubble: true});
        setTimeout(function() {
            this.setState({showBubble: false})
        }.bind(this), 3000)
    }

    handleChoseCard(card) {
        if (this.state.currentPlayer === 'player1') {
            let cardFound = this.checkCard(card, this.state.player2.cards);

            if (cardFound) {
                this.toggleShow(false);
                this.addCardAndCheckGame(cardFound);
            } else {

                this.getFromDeck();
            }
        }

        if (this.state.currentPlayer === 'player2') {
            let cardFound = this.checkCard(card, this.state.player1.cards);

            if (cardFound) {
                this.toggleShow(false);
                this.addCardAndCheckGame(cardFound);
            } else {
                this.displayNotice("I don't have this card.");
                this.getFromDeck();
            }
        }
    }

    getFromDeck() {
        this.setState({
            pickFromDeck: true
        });
    }

    removeCard(card, array) {
        for( var i = array.length-1; i--;){
            if ( array[i].category.id == card.category.id && array[i].subject.id == card.subject.id){
                array.splice(i, 1);
            }
        }
    }

    addCardAndCheckGame(card) {
        if (this.state.currentPlayer == 'player1') {
            card["status"] = "hidden";
            this.state.player1.cards.push(card);
            this.removeCard(card, this.state.player2.cards);
        } else {
            card["status"] = "visible";
            this.state.player2.cards.push(card);
            this.removeCard(card, this.state.player1.cards);
        }
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


    render() {
        return (

            <div className="game">
                <Player key="pc" data={this.state.player1}/>
                <div className={this.state.showBubble ? "speech" : "speech hidden"}>
                    <div className="speech-bubble">
                        <h2>{this.state.bubbleText}</h2>
                    </div>
                </div>
                <div className="board-no-mans-land"></div>

                <Player key="max" data={this.state.player2}/>
                <Actions
                         show={this.state.show}
                         handleToggle={this.toggleShow}>

                    {this.state.pickFromDeck && <Deck
                        displayNotice={this.displayNotice}
                        cards={this.state.deck}
                        onChosenCard={this.handleChoseCard}
                        handleToggle={this.toggleShow}></Deck>}

                    {!this.state.pickFromDeck && <ChooseCard
                        matriceData={this.state.matriceData}
                        onChosenCard={this.handleChoseCard}
                        handleToggle={this.toggleShow}
                        currentCategory={this.state.currentCategory}
                        changeCategory={this.changeCategory}></ChooseCard>}

                </Actions>
            </div>
        )
    }
}

export default Game;