// src/reducers/courseReducer.js
import { fromJS } from 'immutable';
import { normalize } from 'normalizr';
import * as courseActionTypes from '../actions/courseActionTypes';
import { coursesSchema } from '../schema/courses';

const initialState = fromJS({
  entities: {},
  result: [],
});

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case courseActionTypes.FETCH_COURSE_SUCCESS:
      const normalizedData = normalize(action.data, coursesSchema);
      return state.merge(normalizedData);

    case courseActionTypes.SELECT_COURSE:
    case courseActionTypes.UNSELECT_COURSE:
      return state.setIn(['entities', 'courses', action.index, 'isSelected'], action.type === courseActionTypes.SELECT_COURSE);

    default:
      return state;
  }
}