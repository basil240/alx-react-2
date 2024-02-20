// src/reducers/notificationReducer.js
import * as notificationActionTypes from '../actions/notificationActionTypes';

const initialState = {
  filter: 'DEFAULT',
  notifications: [],
};

export default function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case notificationActionTypes.FETCH_NOTIFICATIONS_SUCCESS:
      // Set isRead to false for every item in the list
      const notifications = action.data.map(notification => ({
        ...notification,
        isRead: false,
      }));
      return {
        ...state,
        notifications,
      };

    case notificationActionTypes.MARK_AS_READ:
      const markAsReadIndex = state.notifications.findIndex(
        notification => notification.id === action.index
      );
      if (markAsReadIndex !== -1) {
        const updatedNotifications = [
          ...state.notifications.slice(0, markAsReadIndex),
          { ...state.notifications[markAsReadIndex], isRead: true },
          ...state.notifications.slice(markAsReadIndex + 1),
        ];
        return {
          ...state,
          notifications: updatedNotifications,
        };
      }
      return state;

    case notificationActionTypes.SET_TYPE_FILTER:
      return {
        ...state,
        filter: action.filter,
      };

    default:
      return state;
  }
}