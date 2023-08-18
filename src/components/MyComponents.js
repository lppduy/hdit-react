import React from 'react';
import DisplayInfor from './DisplayInfor';
import UserInfor from './UserInfo';

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: ' Duy', age: '26' },
      { id: 2, name: 'Linh', age: '24' },
      { id: 3, name: 'Janes', age: '12' },
    ],
  };

  render() {
    // DRY = DONT REPEAT YOURSELF
    return (
      <div>
        <UserInfor />
        <br /> <br />
        <DisplayInfor listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponent;
