import React from 'react';
import './DisplayInfor.scss';
import logo from './../logo.svg';

class DisplayInfor extends React.Component {
  // OOP: nho co babel compiler nen k can
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isShowListUser: true,
  //   };
  // }

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
    // template _ logic js
    return (
      <div className="display-infor-container">
        <img src={logo} />
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
                  <div>
                    <button
                      onClick={() => this.props.handleDeleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </div>
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
