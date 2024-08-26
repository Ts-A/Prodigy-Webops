import React from "react";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Testimonial from "./Testimonial";
import Venue from "./Venue";

const Layout = () => {
  return (
    <div className="grid grid-cols-3 h-full">
      <Sidebar />
      <div className="bg-indigo-300 col-span-2">
        <Hero />
        <Venue />
        <Testimonial />
      </div>
    </div>
  );
};

export default Layout;