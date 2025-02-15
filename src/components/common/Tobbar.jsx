import React from "react";
import { Arrow_Chevron } from "@/assets";

export const Topbar = ({ title, onClick }) => {
  return (
    <div className="flex items-center justify-between w-full h-[60px]">
      <div
        onClick={onClick}
        className="flex cursor-pointer justify-center items-center h-[60px] w-[60px]"
      >
        <Arrow_Chevron direction="left" className="text-black" />
      </div>
      <p className="text-medium20">{title}</p>
      <div className=" h-[60px] w-[60px]" />
    </div>
  );
};
