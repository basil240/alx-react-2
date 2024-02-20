import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Notifications from './Notifications';
import { fetchNotifications } from './actions/notificationActionCreators';

const NotificationsContainer = ({ fetchNotifications }) => {
  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  return <Notifications />;
};

const mapDispatchToProps = {
  fetchNotifications,
};

export default connect(null, mapDispatchToProps)(NotificationsContainer);