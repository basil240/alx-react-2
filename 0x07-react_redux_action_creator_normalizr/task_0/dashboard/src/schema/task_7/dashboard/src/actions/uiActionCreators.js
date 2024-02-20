// src/actions/uiActionCreators.js
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const loginRequest = (email, password) => async (dispatch) => {
  dispatch({ type: LOGIN });

  try {
    const response = await fetch('/login-success.json'); // Adjust the path based on your setup

    if (!response.ok) {
      throw new Error('API request failed');
    }

    dispatch(loginSuccess());
  } catch (error) {
    dispatch(loginFailure());
  }
};