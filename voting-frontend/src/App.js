import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PersonalDetails from "./components/PersonalDetails";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import VerifyVoter from "./components/VerifyVoter";
import ConfirmPage from "./components/ConfirmPage";
import HowItWorks from "./components/HowItWorks";
import About from "./components/About";
import Contact from "./components/Contact";
import Elections from "./components/Elections";
import VoteNow from "./components/VoteNow";
import VoteDone from "./components/VoteDone";
import Results from "./components/Results";
import AdminLogin from "./components/AdminLogin";








function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<VerifyVoter />} />
        <Route path="/details" element={<PersonalDetails />} />
        <Route path="/confirm" element={<ConfirmPage />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
<Route path="/elections" element={<Elections />} />
<Route path="/votenow" element={<VoteNow />} />
<Route path="/votedone" element={<VoteDone />} />
<Route path="/results" element={<Results />} />
<Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}

export default App;