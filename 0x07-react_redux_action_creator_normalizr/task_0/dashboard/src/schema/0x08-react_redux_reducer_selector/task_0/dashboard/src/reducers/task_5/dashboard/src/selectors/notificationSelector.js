// src/selectors/notificationSelectors.js
export const filterTypeSelected = state => state.get('filter');

export const getNotifications = state => state.getIn(['entities', 'notifications']);

export const getUnreadNotifications = state =>
  state.getIn(['entities', 'notifications']).filter(notification => !notification.get('isRead'));