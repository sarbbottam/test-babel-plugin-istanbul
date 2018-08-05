import React from 'react';

class SimpleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState(prevState => {
      return {counter: prevState.counter + 1};
    });
  }

  decrement() {
    this.setState(prevState => {
      return {counter: prevState.counter - 1};
    });
  }

  render() {
    return (
      <div>
        <p className="result">{this.state.counter}</p>
        <button type="button" className="increment" onClick={this.increment}>+</button>
        <button type="button" className="decrement" onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default SimpleComponent;
