import React, { Component } from 'react';
import './App.js'

class personList extends Component {
    render() {
        return (
            <div>
                <li>
                    <p>
                        {this.props.person.firstname}
                        {this.props.person.lastname}
                        {this.props.person.phone}
                    </p>
                </li>
            </div>
        )
    }
}

export default personList;