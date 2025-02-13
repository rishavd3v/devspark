// filepath: /E:/Projects/devspark2/frontend/src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../utils/Auth';
import LoadingSpinner from '../LoadingSpinner';

const ProtectedRoute = ({ element }) => {
  const { loggedIn, loading } = useAuth();

  if (loading) {
    return <LoadingSpinner />;
  }

  return loggedIn ? element : <Navigate to="/login" />;
};

const UnprotectedRoute = ({ element }) => {
  const { loggedIn, loading } = useAuth();

  if (loading) {
    return <LoadingSpinner />;
  }

  return !loggedIn ? element : <Navigate to="/home" />;
};

export {ProtectedRoute, UnprotectedRoute};