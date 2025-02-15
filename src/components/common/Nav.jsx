import { Fill_Calendar, Fill_Home, Fill_Notebook } from "@/assets";
import { useLocation, Link } from "react-router-dom";
import React from "react";

export const Nav = () => {
  const location = useLocation();

  const navIcons = [
    { icon: <Fill_Notebook size={32} />, title: "일기", path: "/diary" },
    { icon: <Fill_Home size={32} />, title: "홈", path: "/" },
    { icon: <Fill_Calendar size={32} />, title: "달력", path: "/calendar" },
  ];

  return (
    <div className="w-[480px] fixed bottom-0 gap-12 px-6 bg-gray-50 h-20 flex justify-center border-t border-gray-100">
      {navIcons.map(({ icon, title, path }) => {
        const isActive = location.pathname === path;
        return (
          <Link
            key={path}
            to={path}
            className={`px-5 py-4 flex gap-1 flex-col text-sm justify-center items-center transition-all ${
              isActive ? "text-gray-900" : "text-gray-300"
            }`}
          >
            {React.cloneElement(icon, {
              className: isActive ? "text-gray-900" : "text-gray-300",
            })}
            {title}
          </Link>
        );
      })}
    </div>
  );
};
