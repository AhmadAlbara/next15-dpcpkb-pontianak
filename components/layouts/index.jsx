import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import ScrollToTop from "../elements/ScrollToTop";

const AppLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="md:max-w-7xl md:mx-auto">
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="justify-evenly md:flex md:gap-8 py-6 ">
          <div className="">{children}</div>
          <Sidebar />
        </main>

        <ScrollToTop/>

        {/* Footer */}
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
