import { useAuth } from '../context/AuthContext';

export function Login() {
  const { setHasLogin } = useAuth();

  const handleLogin = () => {
    // 登录逻辑
    setHasLogin(true);
  };

  return (
    <div>
      <button onClick={handleLogin}>登录</button>
    </div>
  );
}
