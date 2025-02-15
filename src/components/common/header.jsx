import { Arrow_Chevron, Bell } from "@/assets";
import { selectedSubjectStore, subjectStore } from "@/store/subject";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subjectList, setSubjectList] = useAtom(subjectStore);
  const [selectedSubject, setSelectedSubject] = useAtom(selectedSubjectStore);

  const nav = useNavigate();

  const onClickSubject = (title) => {
    nav(`/?subject=${title}`);
    setSelectedSubject(title);
    setIsOpen(false);
  };

  return (
    <div className="w-full absolute top-0 left-0 h-[62px] flex justify-between items-center pl-5 pr-5  z-10">
      <div className="flex gap-1">
        <p className="text-lg">
          관심 분야 <b>{selectedSubject}</b>
        </p>
        <div className="relative">
          <Arrow_Chevron
            direction="bottom"
            className="cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
          {isOpen && (
            <div className="absolute top-6 left-0 w-max  bg-white border border-gray-300 rounded-md flex flex-col gap-1 p-2">
              {subjectList.map((item) => (
                <p
                  key={item.id}
                  onClick={() => onClickSubject(item.title)}
                  className="cursor-pointer"
                >
                  {item.title}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
      <Bell />
    </div>
  );
};

export default Header;
