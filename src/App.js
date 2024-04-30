import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main.js";
import AboutPage from "./pages/about.js";
import WorkoutPage from "./pages/workout.js";
import ResultsPage from "./pages/results.js";
import LoginPage from "./pages/login.js";
import RegistrationPage from "./pages/registration.js";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/workout" element={<WorkoutPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
