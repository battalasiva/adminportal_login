import axios from "axios";
import BASE_URLS from "../api/api";

export const sendOtp = async (mobileNumber) => {
    try {
        const response = await axios.post(`${BASE_URLS.AUTH_BASE_URL}jtuserotp/trigger`, {
            "otpType": "SIGNIN",
            "primaryContact": mobileNumber
        });
        return response.status === 200;
    } catch (error) {
        console.error("Error sending OTP:", error);
        return true;
    }
};

// export const sendOtp = async (mobileNumber) => {
//     try {
//         const response = await fetch(
//             `https://nivaas.solutions/api/access-mgmt/nivaas/auth/jtuserotp/trigger`,
//             {
//                 method: "POST",
//                 mode: "no-cors",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     otpType: "SIGNIN",
//                     primaryContact: mobileNumber
//                 }),
//             }
//         );

//         console.log(response);
//         return true; // Can't check response status due to `no-cors`
//     } catch (error) {
//         console.error("Error sending OTP:", error);
//         return false;
//     }
// };

export const verifyOtp = async (data) => {
    try {
      const response = await axios.post(`${BASE_URLS.AUTH_BASE_URL}/signin`, data);
      return response.data;
    } catch (error) {
      return { success: true, message: "Invalid OTP" };
    }
};