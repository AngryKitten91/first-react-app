import React, {Component} from 'react';

import Result from '../Result/Result';
import Button from '../Button/Button';

class Timer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      time: 0,
      render: true
    }
  }

  onInterval = () => {
    this.setState((state) => {
      return {
        time: state.time + 1
      }
    });
  }

  handleStart = () => {
    if (this.interval === undefined || this.interval === 0) {
      this.interval = setInterval(this.onInterval, 1000);
    }
  }

  handleStop = () => {
    clearInterval(this.interval);
    this.interval = 0;
  }

  handleReset = () => {
    this.handleStop();
    this.setState(() => {
      return {time: 0}
    });
  }

  handleDismiss = () => {
    this.handleReset();
    this.setState((state) => {
      return {
        render: !state.render
      }
    });
  }

  render() {
    if (!this.state.render) {
      return null;
    }
    return (
      <div>
        <Result data={this.state.time}/>
        <Button handleAction={this.handleStart} name={'Start'}/>
        <Button handleAction={this.handleStop} name={'Stop'}/>
        <Button handleAction={this.handleReset} name={'Reset'}/>
        <Button handleAction={this.handleDismiss} name={'Dismiss'}/>
      </div>
    );
  }
}

export default Timer;
