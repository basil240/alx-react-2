import { LOGIN, LOGOUT } from './actionTypes';

const initialState = {
  user: null // Initial state with user set to null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.user // Set user to the one passed within the action
      };
    case LOGOUT:
      return {
        ...state,
        user: null // Set user to null on logout
      };
    default:
      return state;
  }
};

export default authReducer;