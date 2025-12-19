import { login } from "./api";

export default function Login({ setToken }) {
  const handleLogin = async () => {
    const data = await login();
    setToken(data.token);
  };

  return <button onClick={handleLogin}>Login</button>;
}
