import React from "react";
import Card from './Card';

class Player extends React.Component {


    render() {
        return (
            <div>
                <div className="cards">
                    {this.props.data.cards.map(c => {
                        return (
                            <Card key={c.category + "_" + c.subject} data={c}/>
                        )
                    })}
                </div>
                <div className="summary">
                    score: {this.props.data.summary.score}
                </div>
            </div>
        )
    }

}


export default Player;