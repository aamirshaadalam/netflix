import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { selectIsAuthenticated } from '../../features/auth/authSlice';

interface ProtectedRouteProps {
    element: JSX.Element;
}
const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
    const isAuthenticated = useAppSelector(selectIsAuthenticated);
    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to='/login' state={{ from: location }} replace />;
    }

    return element;
};

export default ProtectedRoute;
