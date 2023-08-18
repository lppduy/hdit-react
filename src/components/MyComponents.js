import React from 'react';

class MyComponent extends React.Component {
  state = {
    name: 'EREN YEEGER',
    age: 26,
    address: 'sg',
  };

  handleClick(e) {
    console.log('click rui!!');
    // console.log(e);
    // console.log('my name is', this, state.name); // error
  }

  handleOnMouseOver(e) {
    console.log(e.pageX);
  }

  render() {
    return (
      <div>
        My name is {this.state.name} in {this.state.address} and i'm{' '}
        {this.state.age}
        <button onMouseOver={this.handleOnMouseOver}>Hover me ~</button>
        <button onClick={this.handleClick}>Click me ~</button>
      </div>
    );
  }
}

export default MyComponent;
