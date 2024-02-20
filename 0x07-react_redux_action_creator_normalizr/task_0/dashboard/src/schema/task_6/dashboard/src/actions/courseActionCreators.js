// src/actions/courseActionCreators.js
import { bindActionCreators } from 'redux';
import * as courseActionTypes from './courseActionTypes';

// Existing action creators

// Export the bound action creators
export const courseActionCreators = bindActionCreators(
  {
    selectCourse: courseActionTypes.selectCourse,
    unSelectCourse: courseActionTypes.unSelectCourse,
  },
  // Pass your Redux dispatch function here, assuming you have access to it
  // For example, if you are using React-Redux, you can connect your component
  // and access dispatch as a prop
);