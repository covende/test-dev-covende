import React, {Component} from 'react';

export const doIncrement = (prevState) => ({
  counter: prevState.counter + 1,
});

export const doDecrement = (prevState) => ({
  counter: prevState.counter - 1,
});

class AppExampleTesting extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };

    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  onIncrement() {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  }

  onDecrement() {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  }

  render() {
    const {counter} = this.state;

    return (
      <div>
        <h1>Mi contador</h1>
        <Counter counter={counter} />

        <button type='button' onClick={this.onIncrement}>
          Incrementar
        </button>

        <button type='button' onClick={this.onDecrement}>
          Decrementar
        </button>
      </div>
    );
  }
}

export const Counter = ({counter}) => <p>{counter}</p>;

export default AppExampleTesting;
