// src/reducers/notificationReducer.test.js
import notificationReducer from './notificationReducer';
import * as notificationActionTypes from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  test('returns initial state when no action is passed', () => {
    const initialState = {
      filter: 'DEFAULT',
      notifications: [],
    };
    const newState = notificationReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  test('FETCH_NOTIFICATIONS_SUCCESS returns the data passed', () => {
    const action = {
      type: notificationActionTypes.FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', value: 'New data available' },
      ],
    };
    const expectedState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'New course available' },
        { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
        { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
      ],
    };
    const newState = notificationReducer(undefined, action);
    expect(newState).toEqual(expectedState);
  });

  test('MARK_AS_READ returns the data with the right item updated', () => {
    const initialState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'New course available' },
        { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
        { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
      ],
    };
    const action = {
      type: notificationActionTypes.MARK_AS_READ,
      index: 2,
    };
    const expectedState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'New course available' },
        { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
        { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
      ],
    };
    const newState = notificationReducer(initialState, action);
    expect(newState).toEqual(expectedState);
  });

  test('SET_TYPE_FILTER returns the data with the right filter updated', () => {
    const initialState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'New course available' },
        { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
        { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
      ],
    };
    const action = {
      type: notificationActionTypes.SET_TYPE_FILTER,
      filter: 'URGENT',
    };
    const expectedState = {
      filter: 'URGENT',
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'New course available' },
        { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
        { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
      ],
    };
    const newState = notificationReducer(initialState, action);
    expect(newState).toEqual(expectedState);
  });
});