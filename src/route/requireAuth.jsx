import { Redirect } from 'react-router-dom';

export function PrivateRoute({ children, hasLogin, to }) {
  // 待验证...
  // return <Outlet />;
  if (to == '' || to == undefined) {
    to = '/login';
  }
  return hasLogin ? children : <Redirect to={to} replace />;
}
