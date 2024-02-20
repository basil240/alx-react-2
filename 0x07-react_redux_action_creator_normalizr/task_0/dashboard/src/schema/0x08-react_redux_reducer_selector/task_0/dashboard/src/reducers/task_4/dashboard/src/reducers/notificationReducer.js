// src/reducers/notificationReducer.js
import { fromJS } from 'immutable';
import { normalize } from 'normalizr';
import * as notificationActionTypes from '../actions/notificationActionTypes';
import { notificationsSchema } from '../schema/notifications';

const initialState = fromJS({
  entities: {},
  result: [],
  filter: 'DEFAULT',
});

export default function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case notificationActionTypes.FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedData = normalize(action.data, notificationsSchema);
      return state.merge(normalizedData).set('filter', 'DEFAULT');

    case notificationActionTypes.MARK_AS_READ:
      return state.setIn(['entities', 'notifications', action.index, 'isRead'], true);

    case notificationActionTypes.SET_TYPE_FILTER:
      return state.set('filter', action.filter);

    default:
      return state;
  }
}