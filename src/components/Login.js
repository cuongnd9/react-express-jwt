import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../actions/authentication';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (props.auth.isAuthenticated) {
      props.history.push('/');
    }
  });

  const handleChange = e => {
    e.target.name === 'email' && setEmail(e.target.value);
    e.target.name === 'password' && setPassword(e.target.value);
  };

  const handleSubbmit = e => {
    e.preventDefault();
    const user = { email, password };
    props.onLoginUser(user, props.history);
  };

  return (
    <div className="col-4">
      <h3 className="text-primary">Login</h3>
      <form onSubmit={handleSubbmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="form-control mt-3"
        />
        {props.errors.email && (
          <div className="badge badge-danger">{props.errors.email}</div>
        )}
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Enter your password"
          className="form-control mt-3"
        />
        {props.errors.password && (
          <div className="badge badge-danger">{props.errors.password}</div>
        )}
        <input
          type="submit"
          name="submit"
          value="Login"
          className="form-control btn btn-success mt-3"
        />
      </form>
    </div>
  );
}

Login.propTypes = {
  loginUser: PropTypes.func,
  errors: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string
  }).isRequired,
  auth: PropTypes.object
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});

const mapDispatchToProps = (dispatch, props) => ({
  onLoginUser: (user, history) => dispatch(loginUser(user, history))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Login));
