import React from "react";
import PopPop from 'react-poppop';

const overlay = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 50,
    backgroundColor: 'transparent'
};

const content = {
    transition: 'all 0.3s',
    backgroundColor: 'white',
    borderRadius: '3px',
    zIndex: 51,
    position: 'relative',
    boxShadow: '0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)',
    padding: '10px 50px',
    overflow: 'auto',
    paddingTop: '60px'
};

class Actions extends React.Component {



    render() {
        return (
            <div>
                <button className="btn btn-default" onClick={() => this.props.handleToggle(true)}>Ask Card</button>
                <PopPop position="centerCenter"
                        open={this.props.show}
                        onClose={() => this.props.handleToggle(false)}
                        overlayStyle={overlay}
                        contentStyle={content}>

                    <div>

                        {this.props.children}

                    </div>
                </PopPop>
            </div>
        )
    }

}

export default Actions;