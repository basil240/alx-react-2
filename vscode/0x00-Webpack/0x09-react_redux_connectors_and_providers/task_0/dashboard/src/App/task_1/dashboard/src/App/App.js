// App.js
import React from 'react';
import PropTypes from 'prop-types';

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

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  displayDrawer: PropTypes.bool.isRequired,
  displayNotificationDrawer: PropTypes.func.isRequired,
  hideNotificationDrawer: PropTypes.func.isRequired,
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
};

export default App;