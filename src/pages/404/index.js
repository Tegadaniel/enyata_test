import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-[#071827]">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
      <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">Page Not Found</div>
      <div className="mt-5">
        <div className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
          <span className="absolute inset-0 bg-[#FF6A3D]"></span>
          <span className="relative block px-8 py-3 bg-[#1A2238] border border-current cursor-pointer">
            <div onClick={() => navigate(-1)}>Go Back</div>
          </span>
        </div>
      </div>
    </div>
  );
}
