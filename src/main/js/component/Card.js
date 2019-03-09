import React from "react";

class Card extends React.Component {

    render() {
        return (

            <div className={'board-card-frame' + (this.props.left ? ' board-card-min' : '')}>
                <div className="board-card" style={{backgroundColor: this.props.data.category.color}}>
                    <div className="category">
                        <div className="category-icon">
                            <img src={this.props.data.category.icon} width="20" height="20"></img>
                        </div>
                        <div className="category-title">
                            {this.props.data.category.title}
                        </div>

                    </div>
                    <div className="subject">
                        <div className="subject-body">
                            <img src={this.props.data.subject.thumbnail} width="100%" height="120"></img>
                        </div>
                        <div className="subject-footer">
                            {this.props.data.subject.title}
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default Card;