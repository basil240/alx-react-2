import React from 'react';
import PropTypes from 'prop-types';

const Notifications = ({ listNotifications }) => (
  <div className="notificationsContainer">
    <p>Here is the list of notifications</p>
    <ul>
      {listNotifications.map(notification => (
        <li key={notification.id}>{notification.value}</li>
      ))}
    </ul>
  </div>
);

Notifications.propTypes = {
  listNotifications: PropTypes.array.isRequired,
};

export default Notifications;