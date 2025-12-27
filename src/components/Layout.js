import React from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Background from "./Background";

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Background />
      <Navbar />
      <main className="relative z-10 w-full">
        {children}
      </main>
      <Contact />
    </div>
  );
};

export default Layout;
