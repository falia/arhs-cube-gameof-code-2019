import React from "react";
import Card from './Card';
import Tooltip from "react-simple-tooltip"

class ChooseCard extends React.Component {
    render() {
        return (
            <div>

                <div className="popup-header">
                    <div className="popup-categories">
                        {this.props.matriceData.map(c => {
                            return (
                                <Tooltip key={"T_3" + c.title} content={c.title} zIndex={55} fontFamily={"Calibri"} padding={10}>
                                    <span key={c.title} className="category-icon-choice">
                                    <img onClick={() => {
                                        this.props.changeCategory(c)
                                    }} src={c.icon} width="20" height="20"></img>
                                </span>
                                </Tooltip>
                            )

                        })}
                    </div>
                </div>

                <div className="popup-container">
                    {this.props.currentCategory && this.props.currentCategory.subjects.map(s => {
                        return (

                            <Card left="left" onChosenCard={this.props.onChosenCard} key={this.props.currentCategory.id + "_" + s.id} data={{
                                category: this.props.currentCategory,
                                subject: s
                            }}/>
                        )
                    })}
                </div>


            </div>
        )
    }
}

export default ChooseCard;