import React from 'react'; // 确保 React 导入
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function withRouter(Component) {
  return function ComponentWithRouterProps(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }} // 将路由信息注入 props
      />
    );
  };
}

export default withRouter;
