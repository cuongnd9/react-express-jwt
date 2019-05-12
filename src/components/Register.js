import React, { useState } from 'react';

function Register() {
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
          className="form-control my-3"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="form-control my-3"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Enter your password"
          className="form-control my-3"
        />
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          placeholder="Enter your confirm password"
          className="form-control my-3"
        />
        <input
          type="submit"
          name="submit"
          value="Register"
          className="form-control btn btn-success"
        />
      </form>
    </div>
  );
}

export default Register;
