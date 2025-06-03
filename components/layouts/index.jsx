import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import ScrollToTop from "../elements/ScrollToTop";
import AppLogo from "../elements/AppLogo";
import Image from "next/image";
import Header from "./Header";

const AppLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />
      <div className="md:max-w-7xl md:mx-auto">
        
        <main className="justify-evenly md:flex md:gap-8  ">
          <div className="">{children}</div>
          <Sidebar />
        </main>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AppLayout;
