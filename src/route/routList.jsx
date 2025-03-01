import Login from "../views/login/Login";
import NewsSandBox from "../views/sandbox/NewsSandBox";
import { Navigate } from "react-router";

export const routeList = [
  {
    path: "/login",
    element: <Login />,
    children: [],
    needAuth: false,
  },
  {
    path: "/",
    element: <NewsSandBox />,
    children: [],
    needAuth: true,
  },
];
