import { useState } from "react";
import API from "../api/api";

export default function Login() {
  const [data, setData] = useState({ email: "", password: "" });

  const submit = async (e) => {
    e.preventDefault();
    const res = await API.post("/auth/login", data);
    localStorage.setItem("token", res.data.token);
    window.location.href = "/dashboard";
  };

  return (
    <div className="container mt-5 col-md-4">
      <h3>Login</h3>
      <form onSubmit={submit}>
        <input
          className="form-control mb-2"
          placeholder="Email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <input
          type="password"
          className="form-control mb-2"
          placeholder="Password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}
