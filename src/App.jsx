import React from "react";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import OTPPage from "./Pages/OTPPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/sign-up' element={<SignUpPage />} />
          <Route path='/otp' element={<OTPPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
