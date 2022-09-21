import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

export default function InAppLayout() {
  return (
    <div className="grid xl:grid-cols-12 md:grid-cols-16 grid-cols-16 h-screen w-full xl:grid-rows-10">
      <nav className=" xl:col-start-1 xl:col-span-2 border-r  min-h-[100vh] space-x-5 xl:w-[210px] md:w-[100px] w-20  px-5 xl:flex bg-[#031434] md:col-start-1 md:col-end-1">
        <Sidebar />
      </nav>
      <header className="bg-BACKGROUND_WHITE p-6 xl:w-[86%] md:w-[90%] w-full fixed top-0 z-50 h-16 shadow-header mx-20 xl:mx-56 md:mx-[50]">
        <Header />
      </header>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeIn", duration: 0.8 }}
        className="bg-[#FFFFFF] md:p-5 xl:col-start-3 xl:col-end-13 p-3 mt-16 col-start-4 col-span-full md:col-start-3 md:col-span-full space-x-11"
      >
        <Outlet />
      </motion.div>
    </div>
  );
}
