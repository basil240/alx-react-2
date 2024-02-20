import React from 'react';
import { connect } from 'react-redux';
import { loginRequest } from './path/to/authActionCreators'; // Adjust import path as needed

export class App extends React.Component {
  render() {
    const { isLoggedIn, displayDrawer, loginRequest } = this.props;

    return (
      <div>
        <p>{isLoggedIn ? 'User is logged in' : 'User is not logged in'}</p>
        <p>{displayDrawer ? 'Notification Drawer is visible' : 'Notification Drawer is hidden'}</p>
        <button onClick={() => loginRequest('example@example.com', 'password')}>Login</button>
        {/* Other components and elements */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.uiReducer.get('isUserLoggedIn'),
  displayDrawer: state.uiReducer.get('isNotificationDrawerVisible')
});

export default connect(mapStateToProps, { loginRequest })(App);