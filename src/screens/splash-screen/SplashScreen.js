import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../../common/assets/splashScreen.json";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 1000); 
    return () => clearTimeout(timer);
  }, [navigate]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div style={styles.container}>
      <Lottie options={defaultOptions} height={250} width={250} />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#fff",
  },
};

export default SplashScreen;