// src/App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { RecoilRoot } from "recoil";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute />}>
            <Route index element={<Dashboard />} />
          </Route>
          <Route path="/landingpage" element={<ProtectedRoute />}>
            <Route index element={<LandingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
