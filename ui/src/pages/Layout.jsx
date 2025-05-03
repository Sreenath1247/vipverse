import React from "react";
import Header from "../components/Header";
import VerticalNavBar from "../components/VerticalNavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="flex flex-row bg-slate-950 h-screen w-full">
        <div className="w-1/9">
          <VerticalNavBar />
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
