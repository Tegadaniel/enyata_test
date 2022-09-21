import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function InAppLayout() {
  return (
    <div className="grid grid-cols-12 h-screen w-full">
      <nav className=" col-start-1 col-span-3 border-r  min-h-[100vh] space-x-5 xl:w-[220px] md:w-[100px] w-20  px-5 xl:flex bg-[#031434]">
        <Sidebar />
      </nav>
      <header className="bg-BACKGROUND_WHITE p-6 w-full fixed top-0 z-50 h-16 shadow-header mx-20 xl:mx-56 md:mx-[50]">
        <Header />
      </header>
    </div>
  );
}
