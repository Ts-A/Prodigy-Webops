import React from "react";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="grid grid-cols-3 h-full">
      <Sidebar />
      <div className="bg-indigo-300 col-span-2">Main Page</div>
    </div>
  );
};

export default Layout;
