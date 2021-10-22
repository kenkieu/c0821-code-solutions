import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input onChange={this.handleChange} type="email" value={this.state.value}/>
        <button type="submit" value="submit">Sign Up</button>
      </form>
    );
  }

  handleChange() {
    this.setState({ value: event.target.value });
  }

  handleSubmit() {
    event.preventDefault();
    console.log('state:', this.state.value);
  }
}

ReactDOM.render(
  <NewsletterForm/>,
  document.querySelector('#root')
);
