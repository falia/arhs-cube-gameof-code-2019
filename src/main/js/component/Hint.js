import React from "react";

class Hint extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showBubble: false,
            bubbleText: ''
        };

        this.displayNotice = this.displayNotice.bind(this);
    }

    displayNotice(message) {
        this.setState({bubbleText: message, showBubble: true});

        setTimeout(function() {
            this.setState({showBubble: false})
        }.bind(this), 3000)
    }

    componentWillReceiveProps(newProps) {
        console.log("text-s", this.state.bubbleText);
        console.log("message", newProps.message);

        if(newProps.message != undefined && this.state.bubbleText !== newProps.message) {
            this.displayNotice(newProps.message)
        }

    }

    render() {
        return (
            <div className={this.state.showBubble ? "speech" : "speech hidden"}>
                <div className="speech-bubble">
                    <h2>{this.state.bubbleText}</h2>
                </div>
            </div>
        )
    }

}

export default Hint;