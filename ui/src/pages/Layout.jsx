import React from "react";
import Header from "../components/Header";
import VerticalNavBar from "../components/VerticalNavBar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full lg:h-28 md:h-15 h-15 z-50 bg-slate-950">
        <div className="max-w-[1920px] mx-auto w-full lg:h-28 md:h-15 h-15">
          <Header />
        </div>
      </header>

      {/* Scrollable Content */}
      <div className="bg-slate-950 w-full h-full lg:mt-35 mt-20 flex">
        <div className="lg:block hidden w-55 position fixed xl:pl-13 lg:pl-10">
          <VerticalNavBar />
        </div>
        <div className="sm:px-8 lg:px-10 xl:px-13 flex-1 lg:ml-55">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
