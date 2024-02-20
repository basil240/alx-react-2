import React from 'react';
import { connect } from 'react-redux';
import { setNotificationFilter } from './actions/notificationActionCreators';
import { getUnreadNotificationsByType } from './selectors/notificationSelector';

const Notifications = ({ notifications, setFilter }) => {
  // Your component logic here
};

const mapStateToProps = (state) => ({
  notifications: getUnreadNotificationsByType(state),
});

const mapDispatchToProps = {
  setFilter: setNotificationFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);

