import React from "react";

class Card extends React.Component {

    renderVisibleCard() {
        return (
            <div onClick={e => {
                e.preventDefault;
                this.props.onChosenCard(this.props.data)}
            }  className={'board-card-frame' + (this.props.left ? ' board-card-min' : '')}>
                <div className="board-card" style={{backgroundColor: this.props.data.category.color}}>
                    <div className="category">
                        <div className="category-icon">
                            <img src={this.props.data.category.icon} width="20" height="20"></img>
                        </div>
                        <div className="category-title">
                            {this.props.data.category.title}
                        </div>
                        <div className="subject-footer">
                            {this.props.data.subject.title}
                        </div>

                    </div>
                    <div className="subject" style={{height: 0}}>
                        <div className="subject-body">
                            <img src={this.props.data.subject.thumbnail} width="100%" height="120"></img>
                        </div>
                        {this.props.left ? null : <div className="pdf-icon">
                            <img onClick={()=> window.open(this.props.data.url, "_blank")} src="/icons/magnifier.png" width="40" height="40"></img>
                        </div>}
                    </div>
                </div>

            </div>
        )
    }

    renderHiddenCard() {
        return (
            <div  onClick={e => {this.props.onChosenCard(this.props.data)}}   className={'board-card-frame disabled' + (this.props.left ? ' board-card-min' : '')}>
                <div className="board-card disabled">
                    <img src="images/LU-CA.png" width="20" height="20"></img>
                </div>
            </div>
        )
    }

    static renderGenericHiddenCard() {
        return (
            <div className="deck-stack">
                <div className={'board-card-frame disabled fake stack-1'}>
                    <div className="board-card disabled">
                    </div>
                </div>
                <div className={'board-card-frame disabled fake stack-2'}>
                    <div className="board-card disabled">
                    </div>
                </div>
                <div className={'board-card-frame disabled fake stack-3'}>
                    <div className="board-card disabled">
                    </div>
                </div>
                <div className={'board-card-frame disabled fake stack-4'}>
                    <div className="board-card disabled">
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return this.props.data.status === "hidden" ? this.renderHiddenCard() : this.renderVisibleCard();
    }

}

export default Card;