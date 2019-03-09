import React from "react";
import Player from './Player';
import Actions from './Actions';
import Deck from './Deck';

class Game extends React.Component {

    constructor(props) {
        super();

        this.state = {
            turn: 1,

            player1: {
                cards: [
                    {
                        category: {
                            title: "Economy",
                            icon: "/icons/icon-category-economy.png",
                            color: "#836123"
                        },
                        subjet: "S1"
                    },
                    {
                        category: "C2",
                        subjet: "S1"
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
                        subjet: "S2"
                    },
                    {
                        category: "C2",
                        subjet: "S2"
                    }
                ],

                summary: {
                    score: 0
                }
            },

            deck: [
                {
                    category: "C1",
                    subjet: "S3"
                },
                {
                    category: "C2",
                    subjet: "S3"
                }
            ],

            show : false
        }

        this.toggleShow = this.toggleShow.bind(this);
    }

    toggleShow(show) {
        this.setState({show});
    }


    render() {
        return (

            <div className="game">
                <Player key="pc" data={this.state.player1}/>
                <Deck data={this.state.deck}/>
                <Player key="max" data={this.state.player1}/>
                <Actions show={this.state.show} handleOnClick={this.toggleShow}/>

            </div>
        )
    }

}


export default Game;