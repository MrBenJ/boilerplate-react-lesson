import React from 'react';

class WebApp extends React.Component {

    constructor(props) {
        super(props);
        this.displayName = "WebApp";

        this.onChange = this.onChange.bind(this);
    }

    componentWillMount() {
        console.log('Will Mount');
        this.setState({
            filterBy: ''
        });
    }

    onChange(evt) {
        this.setState({
            filterBy: evt.target.value
        });
    }

    render() {
        console.log('render()');
        return (
            <div className="webapp">
                <div className="main">
                    <p className="main-text">
                        GROCERY LIST
                    </p>
                    <input
                        type="text"
                        value={this.state.filterBy}
                        onChange={this.onChange}/>
                    <ul>
                        {this.props.list.map((item, idx) => {
                            if(item.includes(this.state.filterBy)) {
                                return <li key={idx}>{item}</li>;
                            }
                        })}
                    </ul>
                </div>
            </div>
        );
    }


    componentDidMount() {
        console.log('Did Mount');
    }

    componentWillUpdate() {
        console.log('Will Update');
    }

    componentDidUpdate() {
        console.log('Did Update');
    }
}

WebApp.propTypes = {
    list: React.PropTypes.array.isRequired
};

export default WebApp;
