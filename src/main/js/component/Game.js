import React from "react";
import Player from './Player';
import Actions from './Actions';
import Deck from './Deck';

class Game extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            turn: 1,

            matriceData: [
                {
                    title: "Economy",
                    icon: "/icons/icon-category-economy.png",
                    color: "#836123",
                    subjects: [
                        {
                            title: "S1",
                        },
                        {
                            title: "S2",
                        },
                        {
                            title: "S3",
                        }
                    ]
                },

                {
                    title: "Politics",
                    icon: "/icons/icon-category-politic.png",
                    color: "#836123",
                    subjects: [
                        {
                            title: "S1",
                        },
                        {
                            title: "S2",
                        },
                        {
                            title: "S3",
                        }
                    ]
                },

                {
                    title: "Sports",
                    icon: "/icons/icon-category-sport.png",
                    color: "#836123",
                    subjects: [
                        {
                            title: "S1",
                        },
                        {
                            title: "S2",
                        },
                        {
                            title: "S3",
                        }
                    ]
                },

                {
                    title: "Technology",
                    icon: "/icons/icon-category-technology.png",
                    color: "#836123",
                    subjects: [
                        {
                            title: "S1",
                        },
                        {
                            title: "S2",
                        },
                        {
                            title: "S3",
                        }
                    ]
                },
            ],

            player1: {
                cards: [
                    {
                        category: {
                            title: "Economy",
                            icon: "/icons/icon-category-economy.png",
                            color: "#836123"
                        },
                        subject: {
                            title: "S1"
                        }
                    },
                    {
                        category: {
                            title: "Politics",
                            icon: "/icons/icon-category-politic.png",
                            color: "#836123"
                        },
                        subject: {
                            title: "S1"
                        }
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
                            title: "Economy",
                            icon: "/icons/icon-category-economy.png",
                            color: "#836123"
                        },
                        subject: {
                            title: "S2"
                        }
                    },
                    {
                        category: {
                            title: "Politics",
                            icon: "/icons/icon-category-politic.png",
                            color: "#836123"
                        },
                        subject: {
                            title: "S2"
                        }
                    }
                ],

                summary: {
                    score: 0
                }
            },

            deck: [
                {
                    category: "C1",
                    subject: "S3"
                },
                {
                    category: "C2",
                    subject: "S3"
                }
            ],

            show: false
        };

        this.toggleShow = this.toggleShow.bind(this);
    }

    toggleShow(show) {
        this.setState({show});
    }

    handleChoseCard(card, subject, player) {
        if(player==='player1') {
            let cardFound = this.checkCard(card, subject, this.state.player2.cards);

            if(cardFound) {
                this.addCardAndCheckGame(cardFound, this.state.player1);
            }
        }

        if(player==='player2'){
            let cardFound = this.checkCard(card, subject, this.state.player1.cards);

            if(cardFound) {
                this.addCardAndCheckGame(cardFound, this.state.player2);
            }
        }
    }

    addCardAndCheckGame(card, player) {
        player.cards.push(card);
    }

    checkCard(card, subject, cards) {
        const foundCards = cards.filter(val => {
                return card.id == val.category.id && subject.id == val.subject.id
        });

        if(foundCards && foundCards.length > 0) {
            return foundCards[0];
        } else {
            return null;
        }
    }

    render() {
        return (

            <div className="game">
                <Player key="pc" data={this.state.player1}/>
                <Deck data={this.state.deck}/>
                <Player key="max" data={this.state.player1}/>
                <Actions matriceData={this.state.matriceData} show={this.state.show} handleOnClick={this.toggleShow}/>

            </div>
        )
    }

}


export default Game;