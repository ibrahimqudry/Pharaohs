import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const isLocalAuth = !!localStorage.getItem('pharaohsAuth');

  if (!isAuthenticated && !isLocalAuth) {
    return <Navigate to="/admin" replace />;
  }

  return children;
}