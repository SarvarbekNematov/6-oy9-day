import React from "react";
import { Link, Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <header className="p-5 gap-[40px] bg-blue-400 flex justify-center ">
        <div className="flex">
            <img src="/src/assets/logo.svg" alt="logo" />
            
        </div>
      </header>
      <main className="h-screen">
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
};
