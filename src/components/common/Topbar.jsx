import React from "react";
import { Arrow_Chevron } from "@/assets";

export const Topbar = ({ title, onClick, button }) => {
  return (
    <div className="flex items-center justify-between w-full pb-5">
      <div
        onClick={onClick}
        className="flex cursor-pointer justify-center items-center"
      >
        <Arrow_Chevron className="text-black" />
      </div>
      <p className="font-medium text-lg">{title}</p>
      {button ? button : <div className="h-6 w-6" />}
    </div>
  );
};
