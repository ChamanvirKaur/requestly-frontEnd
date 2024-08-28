import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ element: Component, ...rest }) {
  const token = localStorage.getItem('token'); // Assuming token is stored in localStorage

  return token ? <Component {...rest} /> : <Navigate to="/Login" />;
}

export default PrivateRoute;
