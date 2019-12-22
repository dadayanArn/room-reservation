import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink 
} from "react-router-dom";
import NoMatch from './pages/404';
import './App.css';
import Rooms from './pages/Rooms/Rooms';
import Bookings from './pages/Bookings/Bookings';
import Visitors from './pages/Visitors/Visitors';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <div className='head'></div>
          <nav>
            <ul>
              <li><NavLink activeClassName="activeRoute" exact to="/">Rooms</NavLink ></li>
              <li><NavLink activeClassName="activeRoute" to="/bookings">Bookings</NavLink ></li>
              <li><NavLink activeClassName="activeRoute" to="/visitors">Visitors</NavLink ></li>
            </ul>
          </nav>
        </header>
          <div className="main">
            <Switch>
                <Route exact path="/">
                  <Rooms/>
                </Route>
                <Route path="/bookings">
                  <Bookings/>
                </Route>
                <Route path="/visitors">
                  <Visitors/>
                </Route>
                <Route path="*">
                  <NoMatch />
                </Route>
            </Switch>
          </div>
      </Router>
    </div>
  );
}

export default App;
