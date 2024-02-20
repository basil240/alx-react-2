import { Map } from 'immutable';
import { getAllCoursesList } from './courseSelector';

describe('getAllCoursesList selector', () => {
  it('should return an empty List if no courses exist', () => {
    const state = Map({
      courses: Map({})
    });
    const result = getAllCoursesList(state);
    expect(result.size).toEqual(0);
    expect(result.toJS()).toEqual([]);
  });

  it('should return a List of courses if courses exist', () => {
    const state = Map({
      courses: Map({
        1: { id: 1, name: 'Course 1' },
        2: { id: 2, name: 'Course 2' }
      })
    });
    const result = getAllCoursesList(state);
    expect(result.size).toEqual(2);
    expect(result.toJS()).toEqual([
      { id: 1, name: 'Course 1' },
      { id: 2, name: 'Course 2' }
    ]);
  });
});