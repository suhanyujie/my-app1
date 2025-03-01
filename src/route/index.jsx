import { HashRouter, Route } from "react-router-dom";
import { Routes } from "react-router";
import { routeList } from "./routList";
import { PrivateRoute } from "./requireAuth";

export default function index() {
  const hasLogin = false;
  return (
    <HashRouter>
      <Routes>
        {routeList.map((route) => {
          console.log(route.path, route.needAuth);

          return (
            <Route
              key={route.path}
              path="{route.path}"
              element={
                <PrivateRoute hasLogin={hasLogin}>{route.element}</PrivateRoute>
              }
              {...route}
            />
          );

          // if (route.needAuth) {
          //   return (
          //     <Route
          //       key={route.path}
          //       path="{route.path}"
          //       element={<PrivateRoute>{route.element}</PrivateRoute>}
          //       {...route}
          //     />
          //   );
          // } else {
          //   return (
          //     <Route
          //       key={route.path}
          //       path="{route.path}"
          //       element={route.element}
          //       {...route}
          //     />
          //   );
          // }
        })}
      </Routes>
    </HashRouter>
  );
}
