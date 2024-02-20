import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCourses, selectCourse, unSelectCourse } from './actions/courseActionCreators';
import { getListCourses } from './selectors/courseSelector';
import CourseListRow from './CourseListRow';

const CourseList = ({ courses, fetchCourses, selectCourse, unSelectCourse }) => {
  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  const onChangeRow = (id, checked) => {
    if (checked) {
      selectCourse(id);
    } else {
      unSelectCourse(id);
    }
  };

  return (
    <div>
      <h2>Course List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Credit</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <CourseListRow
              key={course.id}
              id={course.id}
              name={course.name}
              credit={course.credit}
              isChecked={course.isSelected}
              onChangeRow={onChangeRow}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  courses: getListCourses(state)
});

const mapDispatchToProps = {
  fetchCourses,
  selectCourse,
  unSelectCourse
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);