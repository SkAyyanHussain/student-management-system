import { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

export default function App() {
  const [token, setToken] = useState(null);
  return token ? <Dashboard token={token} /> : <Login setToken={setToken} />;
}
