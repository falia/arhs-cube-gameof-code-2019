import React from "react";
import PopPop from 'react-poppop';

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
    maxWidth: '850px',
    padding: '10px 20px'
}

class Actions
    extends React.Component {

    render() {
        return (
            <div>
                <button className="btn btn-default" onClick={() => this.props.handleOnClick(true)}>Card</button>
                <PopPop position="centerCenter"
                        open={this.props.show}
                        closeBtn={true}
                        onClose={() => this.props.handleOnClick(false)}
                        overlayStyle={overlay}
                        contentStyle={content}>

                    {this.props.matriceData.map(c => {



                    })}

                </PopPop>
            </div>
        )
    }

}

export default Actions;