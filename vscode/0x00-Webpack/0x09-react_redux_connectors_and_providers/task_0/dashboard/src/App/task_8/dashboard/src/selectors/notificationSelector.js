import { createSelector } from 'reselect';

const getNotifications = state => state.get('notifications');
const getFilter = state => state.getIn(['ui', 'filter']);

export const getUnreadNotificationsByType = createSelector(
  [getNotifications, getFilter],
  (notifications, filter) => {
    const filteredNotifications = notifications.get('notifications').filter(notification => !notification.get('isRead'));
    if (filter === 'URGENT') {
      return filteredNotifications.filter(notification => notification.get('type') === 'urgent');
    }
    return filteredNotifications;
  }
);