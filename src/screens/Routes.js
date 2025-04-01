import React from "react";
import { Routes, Route,Navigate } from "react-router-dom";
import SplashScreen from "../screens/splash-screen/SplashScreen";
import Signin from "./sign-in/SignIn";
import OtpVerification from "./otp-screen/OtpScreen";
import HomeScreen from "./home-screen/HomeScreen";
import { getQueryParam } from "../common/commonMethods";

const AppRoutes = () => {
  const apartmentId = getQueryParam("apartmentId"); 
//   console.log(apartmentId);
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/login" element={<Signin />} />
      <Route path="/otp-verification" element={<OtpVerification />} />
      <Route path="/home" element={<HomeScreen />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;