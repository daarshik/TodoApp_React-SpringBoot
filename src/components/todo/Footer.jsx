import React, { useContext } from "react";
import { AuthContext } from "./security/AuthContext";

const Footer = () => {
    const authContext = useContext(AuthContext);
  return (
    <footer className="footer">
      <div className="container">Footer</div>
    </footer>
  );
};

export default Footer;
