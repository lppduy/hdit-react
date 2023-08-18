import React from 'react';

class DisplayInfor extends React.Component {
  render() {
    // destructuring
    // const { age, name } = this.props;
    const { listUsers } = this.props;
    console.log(listUsers);
    // = const listUsers = this.props.listUsers

    // console.log(this.props);
    return (
      <div>
        {listUsers.map(user => {
          console.log(user);
          // dung index coi chung dinh bugs
          return (
            <div key={user.id}>
              <div>My name {user.name}</div>
              <div>My age {user.age}</div>
            </div>
          );
        })}
        {/* <div>My name is {name}</div>
        <div>My age is {age}</div>
        <hr />
        <div>My name is {name}</div>
        <div>My age is {age}</div>
        <hr />
        <div>My name is {name}</div>
        <div>My age is {age}</div>
        <hr /> */}
      </div>
    );
  }
}

export default DisplayInfor;
