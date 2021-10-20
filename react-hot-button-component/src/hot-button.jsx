import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const currentCount = this.state.currentCount;
    if (currentCount >= 0 && currentCount < 4) {
      return <button onClick={this.handleClick} className={'purple'}>Hot Button</button>;
    } else if (currentCount < 7) {
      return <button onClick={this.handleClick} className={'light-purple'}>Hot Button</button>;
    } else if (currentCount < 10) {
      return <button onClick={this.handleClick} className={'salmon'}>Hot Button</button>;
    } else if (currentCount < 13) {
      return <button onClick={this.handleClick} className={'orange'}>Hot Button</button>;
    } else if (currentCount < 16) {
      return <button onClick={this.handleClick} className={'yellow'}>Hot Button</button>;
    } else if (currentCount >= 16) {
      return <button onClick={this.handleClick}>Hot Button</button>;
    }
  }

  handleClick() {
    const currentCount = this.state.currentCount;
    this.setState({ currentCount: currentCount + 1 });
  }
}

export default HotButton;
