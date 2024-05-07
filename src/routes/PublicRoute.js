import { selectToken } from '../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({
  component,

  redirectTo = '/devices',
}) => {
  const token = useSelector(selectToken);
  return token ? <Navigate to={redirectTo} /> : component;
};