import React from "react";

const Layout = () => {
  return (
    <div className="grid grid-cols-3 h-full">
      <div className="bg-indigo-500">Side Bar</div>
      <div className="bg-indigo-300 col-span-2">Main Page</div>
    </div>
  );
};

export default Layout;
