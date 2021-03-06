import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Button } from 'antd';

import logo from './logo.svg';
import './App.css';
import Marketplace from './components/marketplace/Marketplace';
import About from './components/about/AboutView';
import Landing from './components/landing/Landing';
import Signup from './components/signup/Signup';
import Signin from './components/singin/Signin';
import Forgot from './components/forget/Forgot';
import Account from './components/account/Account';
import { loginUser, isUserLoggedIn, getUserBearerToken } from './services/user/userService';
import ProtectedRoute from './components/protectedroute/ProtectedRoute';
import { render } from 'react-dom';
import Book from './components/book/book';
import Slot from './components/slot/slot';

class App extends Component {
  state = {
    isAuthenticated: false,
    isLoading: true
  };

  componentDidMount() {
    // TODO remove this timer and use context instead
    this.interval = setInterval(async () => {
      // const user = await loginUser('me@johntan.com', 'abc123');
      // const token = await getUserBearerToken();
      const isLoggedIn = await isUserLoggedIn();

      if (isLoggedIn) {
        this.setState({ isAuthenticated: true, isLoading: false });
      } else {
        this.setState({ isLoading: false });
      }
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { isAuthenticated, isLoading } = this.state;

    return (
      <Router>
        <div>
          {/* <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav> */}

          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/signup" component={Signup} />
            <Route path="/book" component={Book} />
            <Route path="/bookslot" component={Slot} />
            <Route path="/signin" component={Signin} />
            <Route path="/forgot" component={Forgot} />
            <Route path="/about" component={About} />
            <ProtectedRoute
              path="/market"
              component={Marketplace}
              isAuthenticated={isAuthenticated}
              isLoading={isLoading}
            />
            <ProtectedRoute
              path="/account"
              component={Account}
              isAuthenticated={isAuthenticated}
              isLoading={isLoading}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
