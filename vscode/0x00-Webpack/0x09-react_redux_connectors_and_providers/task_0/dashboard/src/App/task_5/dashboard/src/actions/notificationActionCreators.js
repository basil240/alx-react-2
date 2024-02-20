import * as types from './notificationActionTypes';

export const setLoadingState = (isLoading) => ({
  type: types.SET_LOADING_STATE,
  isLoading
});

export const setNotifications = (data) => ({
  type: types.FETCH_NOTIFICATIONS_SUCCESS,
  data
});

export const fetchNotifications = () => {
  return async (dispatch) => {
    dispatch(setLoadingState(true)); // Set loading state to true

    try {
      const response = await fetch('/notifications.json');
      const data = await response.json();
      dispatch(setNotifications(data)); // Dispatch notifications data
    } catch (error) {
      console.error('Error fetching notifications:', error);
    } finally {
      dispatch(setLoadingState(false)); // Set loading state to false
    }
  };
};