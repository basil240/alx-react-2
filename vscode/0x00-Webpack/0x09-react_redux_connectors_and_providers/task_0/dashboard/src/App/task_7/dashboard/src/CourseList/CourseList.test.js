import React from 'react';
import { shallow } from 'enzyme';
import { CourseList } from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList', () => {
  let fetchCoursesMock, selectCourseMock, unSelectCourseMock, courses;

  beforeEach(() => {
    fetchCoursesMock = jest.fn();
    selectCourseMock = jest.fn();
    unSelectCourseMock = jest.fn();
    courses = [
      { id: '1', name: 'Course 1', credit: 3, isSelected: false },
      { id: '2', name: 'Course 2', credit: 4, isSelected: true }
    ];
  });

  it('dispatches fetchCourses action when mounted', () => {
    shallow(<CourseList courses={courses} fetchCourses={fetchCoursesMock} />);
    expect(fetchCoursesMock).toHaveBeenCalled();
  });

  it('calls selectCourse when a row is checked', () => {
    const wrapper = shallow(<CourseList courses={courses} selectCourse={selectCourseMock} />);
    wrapper.find(CourseListRow).at(0).prop('onChangeRow')('1', true);
    expect(selectCourseMock).toHaveBeenCalledWith('1');
  });

  it('calls unSelectCourse when a row is unchecked', () => {
    const wrapper = shallow(<CourseList courses={courses} unSelectCourse={unSelectCourseMock} />);
    wrapper.find(CourseListRow).at(1).prop('onChangeRow')('2', false);
    expect(unSelectCourseMock).toHaveBeenCalledWith('2');
  });
});