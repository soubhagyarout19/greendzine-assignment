import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("");

  const handleNavigation = (path) => {
    navigate(path);
    setActiveLink(path);
  };

  return (
    <div className="footer-main">
      <i
        className={`fa-solid fa-house fa-2xl ${activeLink === "/dashboard" ? "active" : ""}`}
        onClick={() => handleNavigation("/dashboard")}
      ></i>
      <i
        className={`fa-solid fa-user fa-2xl ${activeLink === "/profile" ? "active" : ""}`}
        onClick={() => handleNavigation("/profile")}
      ></i>
    </div>
  );
};

export default Footer;
