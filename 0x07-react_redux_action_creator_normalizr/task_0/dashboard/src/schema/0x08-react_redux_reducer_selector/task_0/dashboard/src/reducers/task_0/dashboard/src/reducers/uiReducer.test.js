// reducers/uiReducer.test.js
import uiReducer from './uiReducer';
import * as uiActionTypes from '../actions/uiActionTypes';

describe('uiReducer', () => {
  test('returns initial state when no action is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };

    const newState = uiReducer(undefined, {});

    expect(newState).toEqual(initialState);
  });

  test('returns initial state when SELECT_COURSE action is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };

    const action = {
      type: 'SELECT_COURSE',
    };

    const newState = uiReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });

  test('updates isNotificationDrawerVisible correctly for DISPLAY_NOTIFICATION_DRAWER action', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };

    const action = {
      type: uiActionTypes.DISPLAY_NOTIFICATION_DRAWER,
    };

    const newState = uiReducer(initialState, action);

    expect(newState.isNotificationDrawerVisible).toBe(true);
  });
});