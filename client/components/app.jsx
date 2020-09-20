import React from 'react';
import Header from './header';
import Form from './form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last: '',
      phone: '',
      email: '',
      message: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.sendInfo = this.sendInfo.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.sendInfo(this.state);
    this.setState({
      first: '',
      last: '',
      phone: '',
      email: '',
      message: ''
    });
  }

  sendInfo(contactInfo) {
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: contactInfo.first,
        lastName: contactInfo.last,
        phone: contactInfo.phone,
        email: contactInfo.email,
        message: contactInfo.message
      })
    })
      .then(response => response.json());
  }

  render() {
    return (
      <div>
        <Header/>
        <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
      </div>
    );
  }
}
