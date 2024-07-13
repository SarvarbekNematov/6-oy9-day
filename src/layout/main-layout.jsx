import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Header } from "./header/header";

export const MainLayout = () => {
  return (
    <>
      <Header/>
      <main className="h-screen">
        <Outlet />
      </main>
    </>
  );
};
