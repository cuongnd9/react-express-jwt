import React, { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import 'bootstrap/dist/css/bootstrap.min.css';
import { setCurrentUser, logoutUser } from './actions/authentication';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Navbar, Register, Login } from './components';
import store from './store';

function App() {
  useEffect(() => {
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      const decoded = jwtDecode(jwtToken);
      store.dispatch(setCurrentUser(decoded));

      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        store.dispatch(logoutUser());
        window.location.href = '/login';
      }
    }
  });

  return (
    <Router>
      <Navbar />
      <div className="container py-5">
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
