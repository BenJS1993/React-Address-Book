import React from 'react';
import './App.css';


class Forms extends Component {
    render() {

        return (
            <div className="formAddress">
                <form onSubmit={this.handleSubmit}>
                    <label>Name:</label>
                        <input type="text" name="firstname" value={this.props.firstname} onChange={this.handleChange.bind(this)} />
                    <label>Surname:</label>
                        <input type="text" name="lastname" value={this.props.lastname} onChange={this.handleChange.bind(this)} />
                    <label>Phone:</label>
                        <input type="text" name="phone" value={this.props.phone} onChange={this.handleChange.bind(this)} />
                    <label>E-mail:</label>
                        <input type="text" name="email" value={this.props.email} onChange={this.handleChange.bind(this)} />
                </form>
            </div>
        )
    }
}

export default Forms;