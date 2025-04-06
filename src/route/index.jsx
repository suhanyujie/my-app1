import { HashRouter, Route, Switch } from 'react-router-dom';
import { routeList } from './routList';
import { PrivateRoute } from './requireAuth';
import Login from '../views/login/Login';
import { Fragment } from 'react';

export default function index() {
  return <RouterContent />;
}

function RouterContent() {
  let hasLogin = false;

  return (
    <HashRouter>
      <Fragment>
        <Switch>
          <Route key="login" path="/login" element={<Login />} />
          {routeList.map((route) => {
            if (route.needAuth) {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    <PrivateRoute hasLogin={hasLogin} to="/">
                      {route.element}
                    </PrivateRoute>
                  }
                />
              );
            } else {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              );
            }
          })}
        </Switch>
      </Fragment>
    </HashRouter>
  );
}
