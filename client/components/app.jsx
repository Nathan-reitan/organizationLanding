import React from 'react';
import Header from './header';
import Form from './form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const first = document.getElementById('first').value;
    const last = document.getElementById('last').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    console.log(first, last, phone, email, message);
  }

  render() {
    return (
      <div>
        <Header/>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}
