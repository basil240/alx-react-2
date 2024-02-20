import React from 'react';
import { connect } from 'react-redux';
import { displayNotificationDrawer, hideNotificationDrawer } from './actions/uiActions'; // Import action creators
import './App.css';

function App({ isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer }) {
  return (
    <div className="App">
      <header className="App-header">
        {isLoggedIn ? <p>User is logged in</p> : <p>User is not logged in</p>}
        {displayDrawer ? <p>Notification Drawer is visible</p> : <p>Notification Drawer is hidden</p>}
        <button onClick={displayNotificationDrawer}>Display Notification Drawer</button>
        <button onClick={hideNotificationDrawer}>Hide Notification Drawer</button>
      </header>
    </div>
  );
}

// Define mapDispatchToProps
const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
};

// Connect the component to the Redux store with both mapStateToProps and mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(App);