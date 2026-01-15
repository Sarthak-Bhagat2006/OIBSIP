import { useState } from "react";
import API from "../api/api";

export default function Register() {
  const [data, setData] = useState({ name: "", email: "", password: "" });

  const submit = async (e) => {
    e.preventDefault();
    await API.post("/auth/register", data);
    alert("Registered successfully");
    window.location.href = "/";
  };

  return (
    <div className="container mt-5 col-md-4">
      <h3>Register</h3>
      <form onSubmit={submit}>
        <input
          className="form-control mb-2"
          placeholder="Name"
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
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
        <button className="btn btn-success w-100">Register</button>
      </form>
    </div>
  );
}
