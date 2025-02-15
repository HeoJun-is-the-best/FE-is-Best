import { Home } from "@/assets";
import React from "react";

export const Nav = () => {
  const navIcons = [
    { icon: <Home />, title: "메인" },
    { icon: <Home />, title: "메인" },
    { icon: <Home />, title: "메인" },
  ];

  return (
    <div className="w-screen gap-12 px-6 bg-white h-20 flex justify-center">
      {navIcons.map(({ icon, title }) => {
        <div className=""></div>;
      })}
    </div>
  );
};
