// src/actions/uiActionCreators.test.js
import {
    login,
    logout,
    displayNotificationDrawer,
    hideNotificationDrawer,
  } from './uiActionCreators';
  import {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
  } from './uiActionTypes';
  
  describe('uiActionCreators', () => {
    test('login action creator', () => {
      const email = 'test@example.com';
      const password = 'password123';
      const expectedAction = {
        type: LOGIN,
        user: { email, password },
      };
  
      const result = login(email, password);
  
      expect(result).toEqual(expectedAction);
    });
  
    test('logout action creator', () => {
      const expectedAction = {
        type: LOGOUT,
      };
  
      const result = logout();
  
      expect(result).toEqual(expectedAction);
    });
  
    test('displayNotificationDrawer action creator', () => {
      const expectedAction = {
        type: DISPLAY_NOTIFICATION_DRAWER,
      };
  
      const result = displayNotificationDrawer();
  
      expect(result).toEqual(expectedAction);
    });
  
    test('hideNotificationDrawer action creator', () => {
      const expectedAction = {
        type: HIDE_NOTIFICATION_DRAWER,
      };
  
      const result = hideNotificationDrawer();
  
      expect(result).toEqual(expectedAction);
    });
  });