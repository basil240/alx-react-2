import { createSelector } from 'reselect';

// Selector function to retrieve all course entities
const getAllCourses = state => state.get('courses');

// Selector to return a List of course entities using valueSeq from Immutable
export const getAllCoursesList = createSelector(
  [getAllCourses],
  courses => courses.valueSeq().toList()
);