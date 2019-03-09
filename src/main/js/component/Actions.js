import React from "react";
import PopPop from 'react-poppop';
import Card from './Card';

const overlay = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 99,
    backgroundColor: 'transparent'
};

const content = {
    transition: 'all 0.3s',
    backgroundColor: 'white',
    borderRadius: '3px',
    zIndex: 2000,
    position: 'relative',
    boxShadow: '0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)',

    padding: '10px 20px',
    overflow: 'auto'
};

class Actions extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentCategory: null,
        }
    }

    handleOnClick(c) {
        this.setState({
            currentCategory: c
        })
    }

    render() {
        return (
            <div>
                <button className="btn btn-default" onClick={() => this.props.handleOnClick(true)}>Card</button>
                <PopPop position="centerCenter"
                        open={this.props.show}
                        onClose={() => this.props.handleOnClick(false)}
                        overlayStyle={overlay}
                        contentStyle={content}>

                    <div style={{clear:'right'}}>
                        {this.props.matriceData.map(c => {
                            return (
                                <span key={c.title} className="category-icon-choice">
                                <img onClick={() => {
                                    this.handleOnClick(c)
                                }} src={c.icon} width="20" height="20"></img>
                            </span>
                            )

                        })}
                    </div>
                    <br/>
                    <div >
                        {this.state.currentCategory && this.state.currentCategory.subjects.map(s => {
                            return (

                                <Card left="left" key={this.state.currentCategory.title + "_" + s.title} data={{
                                    category: this.state.currentCategory,
                                    subject: s
                                }}/>
                            )
                        })}
                    </div>
                </PopPop>
            </div>
        )
    }

}

export default Actions;