import React, {Component} from 'react';

import Timer from '../Timer/Timer';
import Counter from '../Counter/Counter';

import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Counter/>
        <Timer/>
      </div>
    );
  }
}

export default App;
