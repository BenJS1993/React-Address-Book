import React, { Component } from 'react';
import './App.css';
import formsBook, { Component } from './Forms.js';
import personList, { Component } from './Person.js';



class App extends Component {
  constructor() {
    super()
    this.state = {
      people: []
    }
  }

  addPerson(person) {
    let people = this.state.people;

    people.push(person);

    this.setState({
      people: []
    })
  }
  


render() {
  return(
    <div className="formAddress">
      <form onSubmit={this.handleSubmit}>
        <label>Name:</label>
          <input type="text" name="firstname" placeholder="Enter First Name" value={this.props.firstname} onChange={this.handleChange.bind(this)} />
        <label>Surname:</label>
          <input type="text" name="lastname" placeholder="Enter Surname" value={this.props.lastname} onChange={this.handleChange.bind(this)} />
        <label>Phone:</label>
          <input type="text" name="phone" placeholder="Enter Phone Number" value={this.props.phone} onChange={this.handleChange.bind(this)} />
        <label>E-mail:</label>
          <input type="text" name="email" placeholder="Enter Email Address" value={this.props.email} onChange={this.handleChange.bind(this)} />
            <button class="formButton" id="formBtn" type="submit">Add Contact</button>
      </form>
    </div>
  );
}
}




export default App;
