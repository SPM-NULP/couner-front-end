import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from '../redux/auth/auth-selectors'

export const PrivateRoute = ({ component: Component, redirectTo = '/login' }) => {
  const token = useSelector(selectToken);
  return token ? Component : <Navigate to={redirectTo} /> ;
};