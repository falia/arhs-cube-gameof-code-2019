import React from "react";

class Card extends React.Component {

    render() {
        return (
            <div className="board-card">
                <div className="category">
                    <img className="category-icon" src={this.props.data.category.icon}></img>
                    <h2>{this.props.data.category.title}</h2>
                </div>
                <div className="subject">{this.props.data.subject}</div>
            </div>
        )
    }

}

export default Card;