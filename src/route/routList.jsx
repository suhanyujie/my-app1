import Admin from '../views/admin/Admin';
import UserList from '../views/admin/user/UserList';
import Home from '../views/sandbox/home/Home';
import NoPermission from '../views/sandbox/other/NoPermission';

export const routeList = [
  { path: '/admin/user/list', element: <UserList />, needAuth: true },
  { path: '/admin', element: <Admin />, needAuth: true },
  { path: '/home', element: <Home />, needAuth: false },
  { path: '/', element: <Home />, needAuth: false },
  { path: '*', element: <NoPermission />, needAuth: false },
];
