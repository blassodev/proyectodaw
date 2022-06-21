import { useAuth } from '../../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
