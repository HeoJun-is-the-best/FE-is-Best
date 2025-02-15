import { Arrow_Chevron, Bell } from "@/assets";
import {
  selectedSubjectStore,
  selectedSubjectTopicStore,
  subjectStore,
} from "@/store/subject";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [subjectList, setSubjectList] = useAtom(subjectStore);
  const [selectedSubjectTopic, setSelectedSubjectTopic] = useAtom(
    selectedSubjectTopicStore
  );
  const [selectedSubject, setSelectedSubject] = useAtom(selectedSubjectStore);

  const nav = useNavigate();

  const onClickSubject = (title) => {
    nav(`?subject=${title}`);
    setSelectedSubject(title);
    setSelectedSubjectTopic("");
    setIsOpen(false);
  };
  const onClickSubjectTopic = (title, sub) => {
    nav(`?subject=${title}?sub=${sub}`);
    setSelectedSubject(title);
    setSelectedSubjectTopic(sub);
    setIsOpen(false);
  };

  return (
    <div className="w-full absolute top-0 left-0 h-[62px] flex justify-between items-center pl-5 pr-5  z-10 bg-white">
      <div className="flex gap-1 relative">
        <p className="text-lg">
          관심 분야{" "}
          <b>
            {selectedSubject}{" "}
            {selectedSubjectTopic && `- ${selectedSubjectTopic}`}
          </b>
        </p>
        <div>
          <Arrow_Chevron
            direction="bottom"
            className="cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
          {isOpen && (
            <div className="absolute top-15 left-0 w-[394px] bg-white border border-gray-300 rounded-[34px] flex flex-col gap-1 p-2">
              {subjectList.map((item) => (
                <div className="flex gap-[6px]">
                  <button
                    className="cursor-pointer bg-[#171717] text-[#F5F5F5] w-[128px] rounded-full text-sm"
                    onClick={() => onClickSubject(item.title)}
                  >
                    {item.title}
                  </button>
                  <div className="flex ">
                    {item.subTopics.map((sub) => (
                      <button
                        onClick={() =>
                          onClickSubjectTopic(item.title, sub.majorTopicTitle)
                        }
                        className="cursor-pointer min-w-14 pl-3 pr-3 h-14 rounded-full flex justify-center items-center bg-[#F5F5F5] text-sm color-[#404040]"
                      >
                        {sub.majorTopicTitle}
                      </button>
                    ))}
                  </div>
                </div>
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
