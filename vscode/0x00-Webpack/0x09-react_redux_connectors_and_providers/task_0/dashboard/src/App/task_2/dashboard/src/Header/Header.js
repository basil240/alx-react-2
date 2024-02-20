import React from 'react';
import { connect } from 'react-redux';
import { logout } from './path/to/authActionCreators'; // Adjust import path as needed

export class Header extends React.Component {
  render() {
    const { user, logout } = this.props;

    return (
      <div>
        <p>Welcome, {user.name}</p>
        <button onClick={logout}>Logout</button>
        {/* Other header content */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user // Assuming the user is stored in the Redux state under the key 'user'
});

export default connect(mapStateToProps, { logout })(Header);