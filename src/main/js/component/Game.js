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
                    category: {
                        id: 1,
                        title: "Economy",
                        icon: "/icons/icon-category-economy.png",
                        color: "#e9c996",
                    },
                    subject: {
                        id: 2,
                        title: "S2",
                        thumbnail: "/thumbnails/1877-01-13_01-00001.jpg"
                    },
                    status: "hidden"
                },


                {
                    category: {
                        id: 1,
                        title: "Economy",
                        icon: "/icons/icon-category-economy.png",
                        color: "#e9c996",
                    },
                    subject: {
                        id: 3,
                        title: "S3",
                        thumbnail: "/thumbnails/1877-02-03_01-00001.jpg"
                    },
                    status: "hidden"
                }

            ],

            show: false,

            pickFromDeck: false,

            askedCard: null,

            currentCategory: null,
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
        if (this.state.currentPlayer == 'player1') {
            card["status"] = "hidden";
            userCards = [].concat(this.state.player1.cards, [card]);
            currentPlayer = 'player1'
        } else {
            card["status"] = "visible";
            userCards = [].concat(this.state.player2.cards, [card]);
            currentPlayer = 'player2'
        }

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
        };

        data[currentPlayer] = {
            cards: userCards,
            summary: user.summary
        };

        if(! (card.category.id == askedCard.category.id && card.subject.id == askedCard.subject.id)) {
            console.log("change turn");
            data.currentPlayer=currentPlayer=='player1'?'player1':'player2';
            this.setState(data);
        } else {
            console.log("continue");

            this.setState(data);
        }
    }

    handleChoseCardFromPlayer(card) {

        let p1 = this.state.player1;
        let p2 = this.state.player2;

        if (this.state.currentPlayer === 'player1') {
            let cardFound = this.checkCard(card, this.state.player2.cards);

            if (cardFound) {
                console.log("found card");

                this.toggleShow(false);

                card["status"] = "hidden";
                let add = [].concat(this.state.player1.cards, [card]);


                console.log(this.state.player2.cards);
                let remove = this.removeCard(card, this.state.player2.cards);
                console.log(remove);

                this.setState({
                    player1:{
                        cards:add,
                        summary:p1.summary
                    },
                    player2:{
                        cards:remove,
                        summary:p2.summary
                    }
                });
            } else {
                this.setState({
                    askedCard: card,
                    pickFromDeck: true
                });

            }
        }

        if (this.state.currentPlayer === 'player2') {

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
                    player1:{
                        cards:remove,
                        summary:p1.summary
                    },
                    player2:{
                        cards:add,
                        summary:p2.summary
                    }
                });
            } else {
                this.setState({
                    askedCard: card,
                    pickFromDeck: true
                });

            }
        }
    }

    removeCard(card, array) {
        let filtered = array.filter(i => {
            return ( i.category.id != card.category.id || i.subject.id != card.subject.id)
        });

        return filtered;
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

                <div className="board-no-mans-land"></div>

                <Player key="max" data={this.state.player2}/>
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
            </div>
        )
    }
}

export default Game;