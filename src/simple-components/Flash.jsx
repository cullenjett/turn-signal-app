import React from "react";

const Flash = ({ children }) => {
  return (
    <div
      style={{
        position: "fixed",
        fontSize: "1.4rem",
        padding: "15px",
        bottom: 0,
        left: 0,
        background: "#fff",
        zIndex: 7,
        boxShadow: "0 -6px 8px rgba(0,0,0,0.1), 0 -4px 10px rgba(0,0,0,0.15)"
      }}
    >
      {children}
    </div>
  );
};

export default Flash;
