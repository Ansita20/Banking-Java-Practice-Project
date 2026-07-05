import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import AuthPage from './Components/Auth/AuthPage';
import AccountPage from './Components/Account/AccountPage';
import Protected from './Components/Protected/Protected';
import RegisterOTPVerification from './Components/Registration/RegisterOTPVerification';

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/signup/otp" element={<RegisterOTPVerification />} />
      <Route path="/dashboard" element={
        <Protected>
          <AccountPage />
        </Protected>
      } />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;