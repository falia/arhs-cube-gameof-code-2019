import React from "react";
import PopPop from 'react-poppop';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

class Actions extends React.Component {

    render() {
        return (
            <div>
                <button className="btn btn-default" onClick={() => this.props.handleOnClick(true)}>Card</button>
                <PopPop position="centerCenter"
                        open={this.props.show}
                        closeBtn={true}
                        closeOnEsc={true}
                        onClose={() => this.props.handleOnClick(false)}
                        closeOnOverlay={true}
                        className="Modal"
                        overlayClassName="Overlay">
                </PopPop>
            </div>
        )
    }

}

export default Actions;