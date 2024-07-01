import React from 'react';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from './redux/features/auth/selectors';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log("🚀 ~ file: PrivateRoute.js:8 ~ PrivateRoute ~ isLoggedIn:", isLoggedIn)

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
