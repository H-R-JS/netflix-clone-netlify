import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/useAuth";
import { useLogout } from "../2Body/Auth/Hook/useLogout";

export const Navbar = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
    try {
      await logout();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <nav className="navbar d-flex align-items-center justify-content-between w-100 position-absolute p-4 ">
      <Link to="/" className="text-decoration-none">
        <h1 className="h1-netflix">NETFLIX</h1>
      </Link>
      {auth?.email ? (
        <section>
          <Link to="/account" className="text-decoration-none">
            <button className="text-white px-4">Account</button>
          </Link>
          <Link className="text-decoration-none">
            <button
              onClick={signOut}
              className="btn-sign-up text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </Link>
        </section>
      ) : (
        <section>
          <Link to="/login" className="text-decoration-none">
            <button className="text-white px-4">Sign In</button>
          </Link>
          <Link to="/register" className="text-decoration-none">
            <button className="btn-sign-up text-white px-4 py-2 rounded">
              Sign Up
            </button>
          </Link>
        </section>
      )}
    </nav>
  );
};
