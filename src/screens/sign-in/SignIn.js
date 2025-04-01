import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppColor from "../../common/colors";
import { sendOtp } from "../../services/auth-services/AuthService";
import splashScreen from "../../common/assets/splashScreenLogo.png";

const Signin = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateMobile = (number) => /^[0-9]{10}$/.test(number);

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setMobileNumber(value);
  };

  const handleSendOtp = async () => {
    if (!validateMobile(mobileNumber)) {
      setError("Enter a valid 10-digit number");
      return;
    }

    setLoading(true);
    const success = await sendOtp(mobileNumber);
    setLoading(false);
    // storageHelper.saveToken('ACCESS_TOKEN',mobileNumber)
    if (success) {
      navigate("/otp-verification", { state: { mobileNumber } });
    } else {
      setError("Failed to send OTP. Try again.");
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <img src={splashScreen} alt="Logo" style={styles.logo} />
        <h2 style={styles.title}>Login</h2>
        <p style={styles.subtitle}>Apartment Request Review & Approvel Portal</p>
        <div style={styles.inputWrapper}>
          <div style={styles.inputContainer}>
            <span style={styles.countryCode}>+91</span>
            <input
              type="text"
              placeholder="Enter Mobile Number"
              value={mobileNumber}
              onChange={handleChange}
              maxLength="10"
              style={styles.input}
            />
          </div>
        </div>
        {error && <p style={styles.error}>{error}</p>}
        <div style={styles.buttonWrapper}>
          <button
            onClick={handleSendOtp}
            disabled={!validateMobile(mobileNumber) || loading}
            style={{
              ...styles.button,
              backgroundColor: validateMobile(mobileNumber) ? AppColor.primaryColor1 : AppColor.grey,
            }}
          >
            {loading ? "Sending..." : "Send OTP"}
          </button>
        </div>
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
    width: "75%",
    maxWidth: "400px",
    padding: "5%",
    textAlign: "center",
    backgroundColor: AppColor.blueShade,
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  },
  logo: {
    width: "40%",
    maxWidth: "100px",
    marginBottom: "10px",
  },
  title: {
    color: AppColor.primaryColor1,
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  subtitle: {
    color: AppColor.black,
    fontSize: "14px",
    marginBottom: "20px",
  },
  inputWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    maxWidth: "320px", 
    backgroundColor: "#f1f1f1",
    borderRadius: "5px",
    border: "1px solid #ccc",
    padding: "10px",
    boxSizing: "border-box",
  },
  countryCode: {
    fontSize: "16px",
    fontWeight: "bold",
    color: AppColor.black,
    marginRight: "10px",
  },
  input: {
    flex: 1,
    border: "none",
    backgroundColor: "transparent",
    fontSize: "16px",
    outline: "none",
  },
  error: {
    color: "red",
    fontSize: "12px",
    marginTop: "5px",
  },
  buttonWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  button: {
    width: "100%",
    maxWidth: "320px",
    padding: "12px",
    fontSize: "16px",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "15px",
    boxSizing: "border-box",
  },
};

export default Signin;
