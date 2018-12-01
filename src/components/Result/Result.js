import React, {Component} from 'react';

export default class Result extends Component {
  render() {
    return (
      <h1>
        {this.props.data}
      </h1>
    );
  }
}