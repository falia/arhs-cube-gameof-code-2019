import React from "react";
import Card from './Card';

class Player extends React.Component {

    render() {
        return (
            <div>
                <div className="player-board">
                    <div className="cards">
                    {this.props.data.cards.map(c => {
                        return (
                            <Card key={c.category.title + "_" + c.subject.title} data={c}/>
                        )
                    })}
                    </div>
                </div>
                <div className="summary">
                    score: {this.props.data.summary.score}
                    <br/>
                    cards: {this.props.data.cards.length}
                </div>
            </div>
        )
    }

}


export default Player;