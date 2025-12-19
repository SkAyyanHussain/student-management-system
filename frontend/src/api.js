const API = "http://localhost:5000/api";

export const login = async () => {
  const res = await fetch(`${API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: "admin", password: "admin" })
  });
  return res.json();
};

export const getStudents = async (token) => {
  const res = await fetch(`${API}/students`, {
    headers: { authorization: token }
  });
  return res.json();
};
