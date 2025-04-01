import React from "react";

const ButtonComponent = ({ text, color, bgColor, loading, onClickFunction }) => {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: color,
        padding: "10px 15px",
        border: "none",
        borderRadius: "5px",
        cursor: loading ? "not-allowed" : "pointer",
        fontSize: "14px",
        fontWeight: "bold",
        transition: "0.3s",
        opacity: loading ? 0.7 : 1,
      }}
      onClick={loading ? null : onClickFunction}
      disabled={loading}
    >
      {loading ? "Loading..." : text}
    </button>
  );
};

export default ButtonComponent;
