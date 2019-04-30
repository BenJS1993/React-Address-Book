import React, { Component } from 'react';
import './App.js';


class formsBook extends Component {
    render() {
        return (
            <div>
                <contactList people={this.state.people} />
                <addPerson people={this.state.people} addPerson={this.addPerson.bind(this)} />
            </div>
        )
    }
}

export default formsBook;