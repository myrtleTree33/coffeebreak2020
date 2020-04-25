import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Button } from 'antd';

import logo from './logo.svg';
import './App.css';
import Marketplace from './components/marketplace/MarketplaceView';
import About from './components/about/AboutView';
import Landing from './components/landing/Landing';
import Signup from './components/signup/Signup';
import Singin from './components/singin/Signin';
import Forget from './components/forget/Forget';
import Account from './components/account/Account';
import { loginUser, isUserLoggedIn, getUserBearerToken } from './services/user/userService';
import ProtectedRoute from './components/protectedroute/ProtectedRoute';
import { render } from 'react-dom';

class App extends Component {
  state = {
    isAuthenticated: false,
    isLoading: true,
  };

  async componentDidMount() {
    // const user = await loginUser('me@johntan.com', 'abc123');
    // const token = await getUserBearerToken();
    const isLoggedIn = await isUserLoggedIn();

    if (isLoggedIn) {
      this.setState({ isAuthenticated: true, isLoading: false });
    } else {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { isAuthenticated, isLoading } = this.state;

    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/marketplace">Marketplace</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/signin">
              <Singin />
            </Route>
            <Route path="/forget">
              <Forget />
            </Route>
            <Route path="/account">
              <Account />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <ProtectedRoute
              path="/marketplace"
              component={Marketplace}
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
