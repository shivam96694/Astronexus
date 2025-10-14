import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./astrologer/admin/userinterface/components/SignUp";
import Login from "./astrologer/admin/userinterface/components/Login";
import UserInformation from './astrologer/admin/userinterface/components/UserInformation'
function App() {
  return (
    <div style={{ fontFamily: "Open Sans" }}>
      <Router>
        <Routes>
          <Route  element={<SignUp />} path="/signup" />
                    <Route  element={<Login />} path="/login" />
          <Route  element={<UserInformation />} path="/userinformation" />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
