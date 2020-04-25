import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isUserLoggedIn } from '../../services/user/userService';

const ProtectedRoute = props => {
  const { component: Component, isAuthenticated, isLoading, ...rest } = props;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Redirect to="/signin" />;
  }

  return <Component {...props} />;
};

export default ProtectedRoute;
