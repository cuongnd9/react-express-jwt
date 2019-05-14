import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../actions/authentication';

function Register(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = e => {
    e.target.name === 'name' && setName(e.target.value);
    e.target.name === 'email' && setEmail(e.target.value);
    e.target.name === 'password' && setPassword(e.target.value);
    e.target.name === 'confirmPassword' && setConfirmPassword(e.target.value);
  };

  const handleSubbmit = e => {
    e.preventDefault();
    const user = { name, email, password, confirmPassword };
    props.onRegisterUser(user, props.history);
  };

  return (
    <div className="col-4">
      <h3 className="text-primary">Register</h3>
      <form onSubmit={handleSubbmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="form-control mt-3"
        />
        {props.errors.name && (
          <div className="badge badge-danger">{props.errors.name}</div>
        )}
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
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          placeholder="Enter your confirm password"
          className="form-control mt-3"
        />
        {props.errors.confirmPassword && (
          <div className="badge badge-danger">{props.errors.confirmPassword}</div>
        )}
        <input
          type="submit"
          name="submit"
          value="Register"
          className="form-control btn btn-success mt-3"
        />
      </form>
    </div>
  );
}

Register.propTypes = {
  registerUser: PropTypes.func,
  errors: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    confirmPassword: PropTypes.string
  }).isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

const mapDispatchToProps = (dispatch, props) => ({
  onRegisterUser: (user, history) => dispatch(registerUser(user, history))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Register));
