import React from 'react';
import './DisplayInfor.scss';
// import logo from './../logo.svg';

// stateless - stateful
// before 2018 chua khi co hooks
// stateless
// stateful -> class component

// class DisplayInfor extends React.Component {
//   // OOP: nho co babel compiler nen k can

//   // state = {
//   //   isShowListUser: true,
//   // };

//   render() {
//     console.log('call me render');
//     // destructuring
//     // const { age, name } = this.props;
//     const { listUsers } = this.props;
//     // console.log(listUsers);
//     // = const listUsers = this.props.listUsers

//     // console.log(this.props);
//     // template _ logic js
//     return (
//       <div className="display-infor-container">
//         {true && (
//           <div>
//             {listUsers.map(user => {
//               console.log('>>> check map user', user);
//               // dung index coi chung dinh bugs

//               return (
//                 <div key={user.id} className={+user.age > 18 ? 'green' : 'red'}>
//                   <div>My name {user.name}</div>
//                   <div>My age {user.age}</div>
//                   <div>
//                     <button
//                       onClick={() => this.props.handleDeleteUser(user.id)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                   <hr />
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfor = props => {
  const { listUsers } = props;

  return (
    <div className="display-infor-container">
      <div>
        <span>Show list users</span>
      </div>
      {true && (
        <div>
          {listUsers.map(user => {
            console.log('>>> check map user', user);
            // dung index coi chung dinh bugs

            return (
              <div key={user.id} className={+user.age > 18 ? 'green' : 'red'}>
                <div>My name {user.name}</div>
                <div>My age {user.age}</div>
                <div>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
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
};

export default DisplayInfor;
