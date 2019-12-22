import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import API from './API';
import './App.css';

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
  <div>
    <h2>404</h2>
  </div>
  )
}

function App() {

  useEffect(() => {
    async function getPosts() {
      const res = await API.get('posts');
      console.log(res);
    }

    getPosts()
  }, [])

  return (
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Rooms</Link>
        </li>
        <li>
          <Link to="/about">Bookings</Link>
        </li>
        <li>
          <Link to="/dashboard">Visitors</Link>
        </li>
      </ul>

      <hr />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="*">
            <NoMatch />
          </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
