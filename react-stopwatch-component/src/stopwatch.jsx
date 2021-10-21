import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerOn: false,
      time: 0
    };
    this.tick = this.tick.bind(this);
    this.pause = this.pause.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  render() {
    if (!this.state.timerOn) {
      return (
      <div className={'container flex-wrap'}>
          <div onClick={this.resetTimer} className={'face cursor-pointer align-center justify-center'}>{this.state.time}</div>
          <i onClick={this.tick} className="fas fa-play cursor-pointer"></i>
      </div>
      );
    } else if (this.state.timerOn) {
      return (
      <div className={'container flex-wrap'}>
          <div className={'face align-center justify-center'}>{this.state.time}</div>
          <i onClick={this.pause} className="fas fa-pause cursor-pointer"></i>
      </div>
      );
    }
  }

  tick() {
    this.setState({ timerOn: true });
    this.timerID = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
  }

  pause() {
    this.setState({ timerOn: false });
    clearInterval(this.timerID);
  }

  resetTimer() {
    this.setState({
      timerOn: false,
      time: 0
    });
  }

}

export default Stopwatch;
