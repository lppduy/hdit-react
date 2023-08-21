import React from 'react';
import { useState } from 'react';

const AddUserInfo = props => {
  const DUMMY_USER = {
    name: '',
    age: '',
    address: 'sg',
  };

  const [user, setUser] = useState(DUMMY_USER);

  const handleClick = () => {
    setUser(user => ({ ...user, name: 'James', age: 30 }));
  };

  const handleChangeName = e => {
    // alert('me');

    setUser(user => ({ ...user, name: e.target.value }));
  };
  const handleChangeAge = e => {
    // bad code:
    //  state.age = e.target.value
    setUser(user => ({ ...user, age: e.target.value }));
  };

  const handleOnSubmit = e => {
    e.preventDefault();

    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + '-random ',
      name: user.name,
      age: user.age,
    });
  };

  return (
    <div>
      {' '}
      My name is {user.name} in {user.address} and i'm {user.age}
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Click me ~
      </button>
      <form onSubmit={e => handleOnSubmit(e)}>
        <label>Your name:</label>
        <input
          value={user.name}
          onChange={e => handleChangeName(e)}
          type="text"
        />
        <label>Your age:</label>
        <input
          value={user.age}
          onChange={e => handleChangeAge(e)}
          type="text"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
// class AddUserInfo extends React.Component {
//   state = {
//     name: '',
//     age: '',
//     address: 'sg',
//   };

//   handleClick(e) {
//     console.log('click rui!!');
//     // console.log(e);
//     console.log('my name is', state.name); // error neu de bth
//     // class => merge state
//     setState({ name: 'James' });
//     setState({ age: 30 });
//   }

//   handleOnMouseOver(e) {
//     // console.log(e.pageX);
//   }

//   handleChangeName = e => {
//     // alert('me');
//     setState({
//       name: e.target.value,
//     });
//   };
//   handleChangeAge = e => {
//     // bad code:
//     //  state.age = e.target.value

//     setState({
//       age: e.target.value,
//     });
//   };

//   handleOnSubmit = e => {
//     e.preventDefault();
//     console.log(state);

//     props.handleAddNewUser({
//       id: Math.floor(Math.random() * 100 + 1) + '-random ',
//       name: state.name,
//       age: state.age,
//     });
//   };

//   render() {
//     return (
//       <div>
//         {' '}
//         My name is {state.name} in {state.address} and i'm{' '}
//         {state.age}
//         <button
//           onClick={e => {
//             handleClick(e);
//           }}
//         >
//           Click me ~
//         </button>
//         <form onSubmit={e => handleOnSubmit(e)}>
//           <label>Your name:</label>
//           <input
//             value={state.name}
//             onChange={e => handleChangeName(e)}
//             type="text"
//           />
//           <label>Your age:</label>
//           <input
//             value={state.age}
//             onChange={e => handleChangeAge(e)}
//             type="text"
//           />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

export default AddUserInfo;
