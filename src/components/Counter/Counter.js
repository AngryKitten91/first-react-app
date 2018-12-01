import React, {Component} from 'react';
import Button from '../Button/Button';
import Result from '../Result/Result';


class Counter extends Component {

  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  handleAdd = () => {
    this.setState((state) => {
      return {
        count: state.count + 1
      }
    });
  }

  handleSubstract = () => {
    this.setState((state) => {
      return {
        count: state.count - 1
      }
    });
  }

  handleReset = () => {
    this.setState(() => {
      return {count: 0}
    });
  }

  render() {
    return (
      <div>
        <Result data={this.state.count}/>
        <Button handleAction={this.handleAdd} name={'Add'}/>
        <Button handleAction={this.handleSubstract} name={'Substract'}/>
        <Button handleAction={this.handleReset} name={'Reset'}/>
      </div>
    );
  }
}

export default Counter;