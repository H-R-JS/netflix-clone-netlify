import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";

export const ProtectedRoute = ({ children }) => {
  const { auth } = UserAuth();

  if (!auth) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};
