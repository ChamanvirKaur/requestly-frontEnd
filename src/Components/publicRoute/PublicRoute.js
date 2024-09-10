// PublicRoute.js
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ element: Element }) => {
  const token = localStorage.getItem('token');

  // If token exists, redirect to the dashboard
  if (token) {
    return <Navigate to="/Dashboard" replace />;
  }

  // Otherwise, render the component
  return <Element />;
};

export default PublicRoute;
