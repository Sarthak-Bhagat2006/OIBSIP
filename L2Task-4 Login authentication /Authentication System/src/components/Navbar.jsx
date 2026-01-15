import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  if (location.pathname === "/" || location.pathname === "/register")
    return null;

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow">
      <span className="navbar-brand fw-bold">Authentication System</span>

      <div className="ms-auto">
        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
}
