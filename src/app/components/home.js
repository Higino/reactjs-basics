import React from "react";

export class Home extends React.Component {
    constructor (props) {
        super();
        this.state = {
            // We should not assign props to a state unless it is an initialization value, which is this case.
            age: props.initialAge,
            status: 'Single' // A dummy state property to demonstrate that the setState function does not change its value
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

    render() {
        return (
            <div>
                <p>In a new Component</p>
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <p>Your status is {this.props.status}, your age is {this.state.status}</p>
                <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me Older</button>
            </div>
        );
    }
}
