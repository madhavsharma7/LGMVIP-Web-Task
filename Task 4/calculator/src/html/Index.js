import React, { Component } from 'react';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      input: '0',
    };
  }

  display = (value) => {
    const { input } = this.state;
    const newInput = input === '0' ? value : input + value;
    this.setState({ input: newInput });
  };

  clear = () => {
    this.setState({ input: '0' });
  };

  delete = () => {
    const { input } = this.state;
    if (input.length > 1) {
      const newInput = input.slice(0, -1);
      this.setState({ input: newInput });
    } else {
      this.setState({ input: '0' });
    }
  };

  calculate = () => {
    try {
      const { input } = this.state;
      const result = eval(input); // Warning: Using eval can be dangerous if not sanitized properly.
      this.setState({ input: result.toString() });
    } catch (error) {
      this.setState({ input: 'Error' });
    }
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center', color: 'white' }}>Simple Calculator</h1>
        <div className="cntainer">
          <div className="calculator">
            <input type="text" placeholder="0" id="input" value={this.state.input} readOnly />
            <div className="row">
              <button className="ac" onClick={this.clear}>AC</button>
              <button className="del" onClick={this.delete}>DEL</button>
              <button className="per" onClick={() => this.display('%')}>%</button>
              <button className="divide" onClick={() => this.display('/')}>/</button>
              <div className="row">
                <button onClick={() => this.display('7')}>7</button>
                <button onClick={() => this.display('8')}>8</button>
                <button onClick={() => this.display('9')}>9</button>
                <button className="multi" onClick={() => this.display('*')}>x</button>
              </div>
              <div className="row">
                <button onClick={() => this.display('4')}>4</button>
                <button onClick={() => this.display('5')}>5</button>
                <button onClick={() => this.display('6')}>6</button>
                <button className="minus" onClick={() => this.display('-')}>-</button>
              </div>
              <div className="row">
                <button onClick={() => this.display('1')}>1</button>
                <button onClick={() => this.display('2')}>2</button>
                <button onClick={() => this.display('3')}>3</button>
                <button className="plus" onClick={() => this.display('+')}>+</button>
              </div>
              <div className="row">
                <button onClick={() => this.display('0')} className="zero">0</button>
                <button onClick={() => this.display('.')} className="dot" style={{ fontWeight: 'bolder' }}>.</button>
                <button onClick={this.calculate} className="equal">=</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
