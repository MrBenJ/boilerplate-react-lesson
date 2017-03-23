import React from 'react';

class WebApp extends React.Component {

    constructor(props) {
        super(props);
        this.displayName = "WebApp";

        this.changeOwner = this.changeOwner.bind(this);
    }

    componentWillMount() {
        this.setState({
            owner: this.props.owner
        });
    }

    changeOwner() {
        let owner = this.state.owner;
        if(owner) { owner += 'z'}
        this.setState({
            owner: owner
        });
    }

    render() {
        return (
            <div className="webapp">
                <div className="main">
                    <p className="main-text">
                        {this.props.title}
                    </p>
                    <p className="main-text">
                        Owner: {this.state.owner}
                    </p>
                    <button
                        className="main-text"
                        onClick={this.changeOwner}>
                        Change Owner
                    </button>
                </div>
            </div>
        );
    }


    componentDidMount() {
        // console.log('Did Mount');
    }

    componentWillUpdate() {
        // console.log('Will Update');
    }

    componentDidUpdate() {
        // console.log('Did Update');
    }
}

WebApp.propTypes = {
    title: React.PropTypes.string.isRequired,
    owner: React.PropTypes.string.isRequired
};

export default WebApp;
