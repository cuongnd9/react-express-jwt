import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Register, Login } from './components'

function App() {
  return (
    <div>
      <Navbar />
      <div className="p-5">
        <Register />
        <Login />
      </div>
    </div>
  );
}

export default App;
