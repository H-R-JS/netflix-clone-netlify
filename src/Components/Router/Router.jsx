import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../2Body/Home";
import { Trailer } from "../2Body/Trailer/Trailer";
import { Login } from "../2Body/Auth/Login";
import { Register } from "../2Body/Auth/Register";
import { Account } from "../2Body/Account/Account";
import { ProtectedRoute } from "../2Body/Auth/ProtectedRoute";
import { PersistLogin } from "../2Body/Auth/PersistLogin";

export const Router = () => {
  return (
    <Routes>
      {/** Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/**Need jwt */}
      <Route element={<PersistLogin />}>
        <Route path="/" element={<Home />} />
        <Route path="/trailer" element={<Trailer />} />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
};
