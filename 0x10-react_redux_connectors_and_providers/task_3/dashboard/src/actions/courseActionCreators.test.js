// task_3/actions/courseActionCreators.test.js
import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('courseActionCreators', () => {
  test('selectCourse action creator', () => {
    const index = 1;
    const expectedAction = {
      type: SELECT_COURSE,
      index,
    };

    const result = selectCourse(index);

    expect(result).toEqual(expectedAction);
  });

  test('unSelectCourse action creator', () => {
    const index = 1;
    const expectedAction = {
      type: UNSELECT_COURSE,
      index,
    };

    const result = unSelectCourse(index);

    expect(result).toEqual(expectedAction);
  });
});