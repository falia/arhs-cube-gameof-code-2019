import React from "react";

class Card extends React.Component {

    render() {
        return (
            <div>
                <div>{this.props.data.category}</div>
                <div>{this.props.data.subject}</div>
            </div>
        )
    }

}

export default Card;