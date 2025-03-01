import { Navigate, Outlet } from "react-router";

export const PrivateRoute = ({ hasLogin }) => {
  //   return <Navigate to="/login" replace />;

  const token = localStorage.getItem("token");
  console.log("redirect", !token);
  if (!hasLogin) {
    return <Navigate to="/login" replace />;
  }
  // 如果用户已认证，渲染子路由
  return <Outlet />;
};
