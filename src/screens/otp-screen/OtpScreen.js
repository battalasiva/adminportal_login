import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AppColor from "../../common/colors";
import { verifyOtp } from "../../services/auth-services/AuthService"; 

const OtpVerification = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const primaryContact = location.state?.mobileNumber || ""; 

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerifyOtp = async () => {
    setLoading(true);
    setError("");

    const enteredOtp = otp.join(""); 
    const response = await verifyOtp({
      primaryContact,
      otp: enteredOtp,
    });

    setLoading(false);

    if (response.success) {
      navigate("/home",{ replace: true }); 
    } else {
      setError("Invalid OTP. Please try again.");
      setOtp(["", "", "", "", "", ""]); 
      inputRefs.current[0].focus(); 
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h2 style={styles.title}>Enter OTP</h2>
        <p style={styles.subtitle}>We've sent a 6-digit code to {primaryContact}</p>

        <div style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              value={digit}
              maxLength="1"
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              ref={(el) => (inputRefs.current[index] = el)}
              style={{
                ...styles.otpBox,
                borderColor: error ? "red" : AppColor.primaryColor1,
              }}
            />
          ))}
        </div>

        {error && <p style={styles.error}>{error}</p>}

        <button
          onClick={handleVerifyOtp}
          disabled={otp.includes("") || loading}
          style={{
            ...styles.button,
            backgroundColor: otp.includes("") ? AppColor.grey : AppColor.primaryColor1,
          }}
        >
          {loading ? "Verifying..." : "Sign In"}
        </button>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: AppColor.lightGrey,
  },
  container: {
    width: "80%",
    maxWidth: "400px",
    padding: "20px",
    textAlign: "center",
    backgroundColor: AppColor.blueShade,
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: AppColor.primaryColor1,
  },
  subtitle: {
    fontSize: "14px",
    marginBottom: "20px",
  },
  otpContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "15px",
  },
  otpBox: {
    width: "40px",
    height: "50px",
    fontSize: "20px",
    textAlign: "center",
    borderRadius: "5px",
    border: "1px solid",
    outline: "none",
  },
  error: {
    color: AppColor.red,
    fontSize: "12px",
    marginTop: "5px",
  },
  button: {
    width: "85%",
    padding: "12px",
    fontSize: "16px",
    color: AppColor.white,
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "15px",
    boxSizing: "border-box",
  },
};

export default OtpVerification;
