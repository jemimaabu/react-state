import React from 'react';

class ClassInput extends React.Component {
  constructor() {
    super();
    this.state = { name: "" };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <>
        <input type="text" value={this.state.name} onChange={this.handleInput} />
        <h1>Hello too{this.state.name ? `, ${this.state.name}` : ""}!</h1>
      </>
    );
  }
}

export default ClassInput;
