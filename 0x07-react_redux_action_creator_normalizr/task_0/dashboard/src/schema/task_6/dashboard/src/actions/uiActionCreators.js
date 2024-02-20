import { connect } from 'react-redux';
import { courseActionCreators } from './actions/courseActionCreators';

// Your component code

// Use selectCourse and unSelectCourse as props
// They will dispatch actions when called
const mapDispatchToProps = (dispatch) => ({
  courseActions: courseActionCreators,
});

export default connect(null, mapDispatchToProps)(YourComponent);