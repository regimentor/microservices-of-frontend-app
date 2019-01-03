import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import { IndexPage, AboutPage, UsersPage } from './pages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about/">About</Link>
                </li>
                <li>
                  <Link to="/users/">Users</Link>
                </li>
              </ul>
            </nav>

            <Route path="/" exact component={IndexPage} />
            <Route path="/about/" component={AboutPage} />
            <Route path="/users/" component={UsersPage} />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
