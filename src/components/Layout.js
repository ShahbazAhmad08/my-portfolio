import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Layout.css";
import ParticleBackground from "../pages/ParticleBackground";

const Layout = ({ children }) => {
  return (
    <ParticleBackground>
      <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
    </ParticleBackground>
    
  );
};

export default Layout;
