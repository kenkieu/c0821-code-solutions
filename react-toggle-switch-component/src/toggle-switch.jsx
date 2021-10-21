import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { switchOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    if (this.state.switchOn === false) {
      return <div className={'container'}>
      <div className={'switch-housing gray'}></div>
      <button onClick={this.handleClick} className={'switch white inactive'}></button>
      <div className={'status'}>OFF</div>
    </div>;
    } else {
      return <div className={'container'}>
        <div className={'switch-housing green'}></div>
        <button onClick={this.handleClick} className={'switch white active'}></button>
        <div className={'status'}>ON</div>
      </div>;
    }
  }

  handleClick() {
    this.setState({ switchOn: !this.state.switchOn });
  }
}

export default ToggleSwitch;
