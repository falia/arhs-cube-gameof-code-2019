import React from "react";
import PopPop from 'react-poppop';
import Modal from 'react-responsive-modal';

const overlay = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '1072px',
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
                <Modal open={this.props.show}
                        onClose={() => this.props.handleToggle(false)}
                        center
                       showCloseIcon={false}
                       classNames={{
                           overlay: "popup-overlay",
                           modal: "popup-modal"
                       }}>
                    <div>

                        {this.props.children}

                    </div>
                </Modal>
            </div>
        )
    }

}

export default Actions;