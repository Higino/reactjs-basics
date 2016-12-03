import React from "react";

export class Home extends React.Component {
    constructor (props) {
        super();
        this.state = {
            // We should not assign props to a state unless it is an initialization value, which is this case.
            age: props.initialAge,
            status: 'Single', // A dummy state property to demonstrate that the setState function does not change its value
            homeLink: props.initialLinkName
        };
        setTimeout(() => {
            this.setState({
                status: 'Married'
            })
        }, 3000)
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        });
    }

    onChangeLink () {
        this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event) {
        this.setState({
            homeLink: event.target.value
        });
    }

    render() {
        return (
            <div>
                <p>In a new Component</p>
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <p>Your status is {this.props.status} {this.state.status}</p>
                <hr/>
                <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me Older</button>
                <hr/>
                <button className="btn btn-primary" onClick={this.props.greet}>Greet</button>
                <hr/>
                <input type="text" value={this.state.homeLink}
                    onChange={(event) => this.onHandleChange(event)}/>
                <button className="btn btn-primary" onClick={this.onChangeLink.bind(this)}>Change Header Link</button>
            </div>
        );
    }
}

// Props validation - Good practice
Home.propTypes = {
    name: React.PropTypes.string,
    initialAge: React.PropTypes.number,
    greet: React.PropTypes.func,
    initialLinkName: React.PropTypes.string
};
