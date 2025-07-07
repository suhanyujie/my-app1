import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import Login from '@/views/login/Login';
import NewsSandBox from '@/views/sandbox/NewsSandBox';

export default function IndexRouter() {
  let token = localStorage.getItem('token');
  console.log(token);
  return (
    <HashRouter>
      <Switch>
        <Route path="/login" component={Login} />
        {/* 游客系统页面 */}

        {/* <Route path="/" component={NewsSandBox}/> */}
        <Route
          path="/"
          render={() =>
            localStorage.getItem('token') ? (
              <NewsSandBox></NewsSandBox>
            ) : (
              <Redirect to="/login" />
            )
          }
        />
      </Switch>
    </HashRouter>
  );
}
