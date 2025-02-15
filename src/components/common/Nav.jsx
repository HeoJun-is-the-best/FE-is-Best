import { Home } from "@/assets";
import React from "react";

export const Nav = () => {
  const navIcons = [
    { icon: <Home />, title: "메인" },
    { icon: <Home />, title: "메인" },
    { icon: <Home />, title: "메인" },
  ];

  return (
    <div className="w-[430px] bottom-0 gap-12 px-6 bg-gray-100 h-20 flex justify-center">
      <div className="px-5 py-4 flex gap-1 flex-col justify-center items-center">
        <Home size={32} className="text-black" />
        <p className="">메인</p>
      </div>
    </div>
  );
};
