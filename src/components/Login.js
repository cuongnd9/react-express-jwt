import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    e.target.name === 'email' && setEmail(e.target.value);
    e.target.name === 'password' && setPassword(e.target.value);
  };

  const handleSubbmit = e => {
    e.preventDefault();
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
          type="submit"
          name="submit"
          value="Login"
          className="form-control btn btn-success"
        />
      </form>
    </div>
  );
}

export default Login;
