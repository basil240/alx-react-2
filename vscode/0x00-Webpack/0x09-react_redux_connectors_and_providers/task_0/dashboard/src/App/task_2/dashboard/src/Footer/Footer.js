import React from 'react';
import { connect } from 'react-redux';

export class Footer extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        <p>Logged in as: {user.name}</p>
        {/* Other footer content */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user // Assuming the user is stored in the Redux state under the key 'user'
});

export default connect(mapStateToProps)(Footer);