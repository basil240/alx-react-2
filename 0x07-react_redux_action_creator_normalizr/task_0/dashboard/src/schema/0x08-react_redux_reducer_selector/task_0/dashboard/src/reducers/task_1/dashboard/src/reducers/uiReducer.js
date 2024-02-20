// reducers/uiReducer.js
import { Map } from 'immutable';
import * as uiActionTypes from '../actions/uiActionTypes';

const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: Map(),
});

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case uiActionTypes.DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true);
    case uiActionTypes.HIDE_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', false);
    case uiActionTypes.LOGIN_SUCCESS:
      return state.set('isUserLoggedIn', true);
    case uiActionTypes.LOGIN_FAILURE:
    case uiActionTypes.LOGOUT:
      return state.set('isUserLoggedIn', false);
    default:
      return state;
  }
}