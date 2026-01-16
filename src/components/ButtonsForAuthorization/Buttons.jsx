import React from "react";
import { useNavigate } from "react-router-dom";
import "../ButtonsForAuthorization/Buttons.css";

export default function Buttons() {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="auth-buttons">
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/register")}>Register</button>
      </div>
    </div>
  );
}
