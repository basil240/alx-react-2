import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotifications } from '../actions/notificationActionCreators';

class Notifications extends Component {
  componentDidMount() {
    const { fetchNotifications } = this.props;
    fetchNotifications();
  }

  render() {
    const { listNotifications } = this.props;
    return (
      <div>
        <h2>Notifications</h2>
        <ul>
          {listNotifications.map(notification => (
            <li key={notification.id}>{notification.value}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  listNotifications: state.notifications.get('notifications').toList()
});

const mapDispatchToProps = {
  fetchNotifications
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);