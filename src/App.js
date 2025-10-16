import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./astrologer/admin/userinterface/components/SignUp";
import Login from "./astrologer/admin/userinterface/components/Login";
import UserInformation from './astrologer/admin/userinterface/components/UserInformation';
import AstroLogerSignUp from './astrologer/admin/userinterface/components/AstrologerSignUp';
import AstroVerification from './astrologer/admin/userinterface/components/AstroVerification';
import HomePage from "./astrologer/admin/userinterface/components/screens/HomePage";
import TalkToAstrologer from "./astrologer/admin/userinterface/components/screens/TalkToAstrologer";
function App() {
  return (
    <div style={{ fontFamily: "Open Sans" }}>
      <Router>
        <Routes>
          <Route  element={<SignUp />} path="/signup" />
                    <Route  element={<Login />} path="/login" />
          <Route  element={<UserInformation />} path="/userinformation" />
          <Route  element={<AstroLogerSignUp />} path="/astrologersignup" />
          <Route  element={<AstroVerification />} path="/astroverification" />
<Route element={<HomePage />} path="/" />
<Route element={<TalkToAstrologer />} path="/talktoastrologer" />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
