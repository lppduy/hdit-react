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

  handleDeleteUser = userId => {
    let listUsersClone = [...this.state.listUsers];
    listUsersClone = listUsersClone.filter(item => item.id !== userId);
    this.setState({
      listUsers: listUsersClone,
    });
  };

  render() {
    // DRY = DONT REPEAT YOURSELF
    // console.log('check hhihih');
    return (
      <>
        <div className="a">
          <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
          <br /> <br />
          <DisplayInfor
            listUsers={this.state.listUsers}
            handleDeleteUser={this.handleDeleteUser}
          />
        </div>
        <div className="b"></div>
      </>
    );
  }
}

export default MyComponent;
