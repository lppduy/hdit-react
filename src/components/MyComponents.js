import React from 'react';
import DisplayInfor from './DisplayInfor';
import AddUserInfo from './AddUserInfo';

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: ' Duy', age: '26' },
      { id: 2, name: 'Linh', age: '24' },
      { id: 3, name: 'Janes', age: '12' },
    ],
  };

  handleAddNewUser = userObj => {
    // let listUsersClone = [...this.state.listUsers];
    // console.log('>>> check data from parent', userObj);
    this.setState({
      listUsers: [userObj, ...this.state.listUsers],
    });
  };

  render() {
    // DRY = DONT REPEAT YOURSELF
    return (
      <div>
        <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
        <br /> <br />
        <DisplayInfor listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponent;
