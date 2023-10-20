// src/App.js
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { RecoilRoot } from "recoil";
import LandingPage from "./pages/LandingPage";
import EditLandingPage from "./pages/EditLandingPage";

function App() {
  useEffect(() => {
    // Check if the landingPages array exists in localStorage
    const existingData = localStorage.getItem("landingPages");
    if (!existingData) {
      // If not, set the default data
      const defaultData = [
        {
          id: 1,
          title: "Landing Page 1",
          description: "Description 1",
          component: [],
        },
        {
          id: 2,
          title: "Landing Page 2",
          description: "Description 2",
          component: [],
        },
        // Add more landing pages as needed
      ];
      localStorage.setItem("landingPages", JSON.stringify(defaultData));
    }
  }, []);

  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute />}>
            <Route index element={<Dashboard />} />
          </Route>
          <Route path="/landingpage/:id" element={<ProtectedRoute />}>
            <Route index element={<LandingPage />} />
          </Route>
          <Route path="/landingpage/edit/:id" element={<ProtectedRoute />}>
            <Route index element={<EditLandingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
