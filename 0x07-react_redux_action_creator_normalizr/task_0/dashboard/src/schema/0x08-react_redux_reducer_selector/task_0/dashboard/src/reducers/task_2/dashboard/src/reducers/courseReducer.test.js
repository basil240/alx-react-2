// src/reducers/courseReducer.test.js
import { Map } from 'immutable';
import courseReducer from './courseReducer';
import * as courseActionTypes from '../actions/courseActionTypes';

describe('courseReducer', () => {
  test('returns initial state when no action is passed', () => {
    const initialState = Map([]);
    const newState = courseReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  test('FETCH_COURSE_SUCCESS returns the data passed', () => {
    const action = {
      type: courseActionTypes.FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
    };
    const expectedState = Map([
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ]);
    const newState = courseReducer(undefined, action);
    expect(newState).toEqual(expectedState);
  });

  test('SELECT_COURSE returns the data with the right item updated', () => {
    const initialState = Map([
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ]);
    const action = {
      type: courseActionTypes.SELECT_COURSE,
      index: 2,
    };
    const expectedState = Map([
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: true, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ]);
    const newState = courseReducer(initialState, action);
    expect(newState).toEqual(expectedState);
  });

  test('UNSELECT_COURSE returns the data with the right item updated', () => {
    const initialState = Map([
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: true, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ]);
    const action = {
      type: courseActionTypes.UNSELECT_COURSE,
      index: 2,
    };
    const expectedState = Map([
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ]);
    const newState = courseReducer(initialState, action);
    expect(newState).toEqual(expectedState);
  });
});