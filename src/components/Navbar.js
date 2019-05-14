import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';

function Navbar(props) {
  const authLinks = (
    <ul className="navbar-nav mr-auto">
      <ul className="navbar-nav ml-auto">
        <div
          className="nav-link"
          onClick={() => props.onLogoutUser(props.history)}
          style={{cursor: 'pointer'}}
        >
          <img
            src={props.auth.user.avatar}
            alt={props.auth.user.name}
            title={props.auth.user.name}
            className="rounded-circle"
            style={{ width: '25px', marginRight: '5px' }}
          />
          Logout
        </div>
      </ul>
    </ul>
  );

  const guestLinks = (
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">
          Home <span className="sr-only">(current)</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/register">
          Register
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand text-primary" to="/">
        React Express JWT
      </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {props.auth.isAuthenticated ? authLinks : guestLinks}
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  logoutUser: PropTypes.func,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch, props) => ({
  onLogoutUser: history => dispatch(logoutUser(history))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Navbar));
