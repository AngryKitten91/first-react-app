import React, {Component} from 'react';

export default class Button extends Component {
    render() {
      const {handleAction, name} = this.props;
      return <button onClick={handleAction}>{name}</button>;
    }
  }