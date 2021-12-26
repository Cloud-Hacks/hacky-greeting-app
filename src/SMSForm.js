import React, { Component } from 'react';
import './SMSForm.css';

class SMSForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: {
        to: '',
        body: ''
      },
      submitting: false,
      error: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({ submitting: true });
    fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.message)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          this.setState({
            error: false,
            submitting: false,
            message: {
              to: '',
              body: ''
            }
          });
        } else {
          this.setState({
            error: true,
            submitting: false
          });
        }
      });
  }

  onHandleChange(event) {
    const name = event.target.getAttribute('name');
    this.setState({
      message: { ...this.state.message, [name]: event.target.value }
    });
  }

  render() {
    return (
      <div className='sms' style={{
        backgroundImage:
          'url(https://mdbcdn.b-cdn.net/img/Photos/Others/pricing-table7.webp)',
        width: '28rem'
      }}>
        <form
        onSubmit={this.onSubmit}
        className={this.state.error ? 'error sms-form' : 'sms-form'}
      >
        <div>
          <label htmlFor="to">To:</label>
          <input
            type="tel"
            name="to"
            id="to"
            value={this.state.message.to}
            placeholder='Enter your friends whatsapp number'
            onChange={this.onHandleChange}
          />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea
            name="body"
            id="body"
            value={this.state.message.body}
            onChange={this.onHandleChange}
            placeholder='Enter your message here'
          />
        </div>
        <button type="submit" disabled={this.state.submitting}>
          Send message
        </button>
      </form>
      </div>
    );
  }
}

export default SMSForm;
