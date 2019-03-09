import React from "react";
import PopPop from 'react-poppop';

class Actions extends React.Component {

    render() {
        return (
            <div>
                <button className="btn btn-default" onClick={() => this.props.handleOnClick(true)}>Card</button>
                <PopPop position="centerCenter"
                        open={this.props.show}
                        closeBtn={true}
                        onClose={() => this.props.handleOnClick(false)}
                        className="Modal"
                        overlayClassName="Overlay">
                </PopPop>
            </div>
        )
    }

}

export default Actions;