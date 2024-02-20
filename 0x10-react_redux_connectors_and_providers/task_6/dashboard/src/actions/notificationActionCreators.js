// src/actions/uiActionCreators.js
import { bindActionCreators } from 'redux';
import * as uiActionTypes from './uiActionTypes';

// Existing action creators

// Export the bound action creators
export const uiActionCreators = bindActionCreators(
  {
    login: uiActionTypes.login,
    logout: uiActionTypes.logout,
    displayNotificationDrawer: uiActionTypes.displayNotificationDrawer,
    hideNotificationDrawer: uiActionTypes.hideNotificationDrawer,
  },
  // Pass your Redux dispatch function here
);