import React from 'react';
import './DisplayInfor.scss';

class DisplayInfor extends React.Component {
  state = {
    isShowListUser: true,
  };

  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };

  render() {
    // destructuring
    // const { age, name } = this.props;
    const { listUsers } = this.props;
    // console.log(listUsers);
    // = const listUsers = this.props.listUsers

    // console.log(this.props);
    return (
      <div className="display-infor-container">
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowListUser
              ? ' Hide list users:'
              : ' Show list users:'}
          </span>
        </div>
        {this.state.isShowListUser && (
          <div>
            {listUsers.map(user => {
              console.log('>>> check map user', user);
              // dung index coi chung dinh bugs

              return (
                <div key={user.id} className={+user.age > 18 ? 'green' : 'red'}>
                  <div>My name {user.name}</div>
                  <div>My age {user.age}</div>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfor;
