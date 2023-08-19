import React from 'react';

class AddUserInfo extends React.Component {
  state = {
    name: '',
    age: '',
    address: 'sg',
  };

  handleClick(e) {
    console.log('click rui!!');
    // console.log(e);
    console.log('my name is', this.state.name); // error neu de bth
    // class => merge state
    this.setState({ name: 'James' });
    this.setState({ age: 30 });
  }

  handleOnMouseOver(e) {
    // console.log(e.pageX);
  }

  handleChangeName = e => {
    // alert('me');
    this.setState({
      name: e.target.value,
    });
  };
  handleChangeAge = e => {
    // bad code:
    //  this.state.age = e.target.value

    this.setState({
      age: e.target.value,
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    console.log(this.state);

    this.props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + '-random ',
      name: this.state.name,
      age: this.state.age,
    });
  };

  render() {
    return (
      <div>
        {' '}
        My name is {this.state.name} in {this.state.address} and i'm{' '}
        {this.state.age}
        <button
          onClick={e => {
            this.handleClick(e);
          }}
        >
          Click me ~
        </button>
        <form onSubmit={e => this.handleOnSubmit(e)}>
          <label>Your name:</label>
          <input
            value={this.state.name}
            onChange={e => this.handleChangeName(e)}
            type="text"
          />
          <label>Your age:</label>
          <input
            value={this.state.age}
            onChange={e => this.handleChangeAge(e)}
            type="text"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddUserInfo;
