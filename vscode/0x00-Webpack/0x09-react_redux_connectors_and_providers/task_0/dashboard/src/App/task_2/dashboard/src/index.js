import React from 'react';
import { connect } from 'react-redux';
import { loginRequest, logout } from './actions/authActionCreators'; // Adjust import path as needed

const ExampleComponent = ({ isLoggedIn, login, logout }) => {
  return (
    <div>
      {isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={() => login('example@example.com', 'password')}>Login</button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps, { login: loginRequest, logout })(ExampleComponent);