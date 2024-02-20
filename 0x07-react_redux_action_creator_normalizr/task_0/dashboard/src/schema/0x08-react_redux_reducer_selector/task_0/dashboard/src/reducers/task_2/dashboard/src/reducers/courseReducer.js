// src/reducers/courseReducer.js
import { Map } from 'immutable';
import * as courseActionTypes from '../actions/courseActionTypes';

const initialState = Map([]);

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case courseActionTypes.FETCH_COURSE_SUCCESS:
      // Set isSelected to false for every item in the list
      const courses = action.data.map(course => Map({ ...course, isSelected: false }));
      return Map(courses);

    case courseActionTypes.SELECT_COURSE:
      return state.update(
        state.findIndex(course => course.get('id') === action.index),
        course => course.set('isSelected', true)
      );

    case courseActionTypes.UNSELECT_COURSE:
      return state.update(
        state.findIndex(course => course.get('id') === action.index),
        course => course.set('isSelected', false)
      );

    default:
      return state;
  }
}