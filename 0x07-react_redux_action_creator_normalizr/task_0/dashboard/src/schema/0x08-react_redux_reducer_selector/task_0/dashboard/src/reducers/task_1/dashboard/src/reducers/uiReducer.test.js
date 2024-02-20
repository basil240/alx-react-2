// reducers/uiReducer.test.js
import { Map } from 'immutable';
import uiReducer from './uiReducer';
import * as uiActionTypes from '../actions/uiActionTypes';

describe('uiReducer', () => {
  test('returns initial state when no action is passed', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map(),
    });

    const newState = uiReducer(undefined, {});

    expect(newState.toJS()).toEqual(initialState.toJS());
  });

  test('returns initial state when SELECT_COURSE action is passed', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map(),
    });

    const action = {
      type: 'SELECT_COURSE',
    };

    const newState = uiReducer(initialState, action);

    expect(newState.toJS()).toEqual(initialState.toJS());
  });

  test('updates isNotificationDrawerVisible correctly for DISPLAY_NOTIFICATION_DRAWER action', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map(),
    });

    const action = {
      type: uiActionTypes.DISPLAY_NOTIFICATION_DRAWER,
    };

    const newState = uiReducer(initialState, action);

    expect(newState.get('isNotificationDrawerVisible')).toBe(true);
  });
});