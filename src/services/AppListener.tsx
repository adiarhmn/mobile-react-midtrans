import React, { useEffect } from "react";
import { App } from "@capacitor/app";
import { useNavigate } from "react-router-dom";

const AppListener: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    App.addListener("appUrlOpen", (event) => {
      const url = new URL(event.url);
      const path = url.pathname;

      if (path === "/home") {
        navigate("/home");
      } else if (path === "/reset-password") {
        navigate("/reset-password"); // Hanya redirect ke halaman ResetPassword
      }
    });
  }, []);

  return null;
};

export default AppListener;
