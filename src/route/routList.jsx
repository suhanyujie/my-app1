import Admin from "../views/admin/Admin";
import NewsSandBox from "../views/sandbox/NewsSandBox";

export const routeList = [
  {
    path: "/",
    element: <NewsSandBox />,
    children1: [],
    needAuth: false,
  },
  {
    path: "/admin",
    element: <Admin />,
    children1: [],
    needAuth: true,
  },
];
