import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

const Header = () => {
  const authContext = useAuth();
  const isAuthenticated = authContext.isAuthenticated;

  const handlelogout = () => {
    authContext.logout();
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5 p-2 border-bottom">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          TodoApp
        </a>
        <div className="navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              {isAuthenticated && (
                <Link
                  to="/welcome/Daarshik"
                  className="nav-link active"
                  aria-current="page"
                >
                  Home
                </Link>
              )}
            </li>
            <li className="nav-item">
              {isAuthenticated && (
                <Link to="/todos" className="nav-link">
                  Todos
                </Link>
              )}
            </li>
            <li className="nav-item">
              {!isAuthenticated && (
                <Link to="/" className="nav-link">
                  Login
                </Link>
              )}
            </li>
            <li className="nav-item">
              {isAuthenticated && (
                <Link to="/logout" className="nav-link" onClick={handlelogout}>
                  Logout
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
