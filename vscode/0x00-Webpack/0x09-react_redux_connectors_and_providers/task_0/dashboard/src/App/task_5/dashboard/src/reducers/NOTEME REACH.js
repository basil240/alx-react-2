import { Map } from 'immutable';
import * as types from '../actions/notificationActionTypes';

const initialState = Map({
  loading: false,
  notifications: Map({})
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LOADING_STATE:
      return state.set('loading', action.isLoading);

    case types.FETCH_NOTIFICATIONS_SUCCESS:
      return state.mergeDeep({
        notifications: action.data
      });

    default:
      return state;
  }
};

export default notificationReducer;