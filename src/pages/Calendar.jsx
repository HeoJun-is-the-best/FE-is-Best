import {
  Arrow_Chevron,
  List,
  Calendar_Days,
  Timer,
  Map_Pin,
  Plus,
  Notebook,
} from "@/assets";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Days = ({ day, num, title, location, time }) => {
  return (
    <div className="w-full flex gap-2 justify-center items-center border-l-2 border-black h-[72px]">
      <div className="px-5 py-2 justify-center items-center flex flex-col text-gray-700">
        <p className="font-medium text-[14px] whitespace-nowrap">수요일</p>
        <p className="font-semibold text-2xl">16</p>
      </div>
      <div className="h-[58px] w-[1px] bg-gray-200" />
      <div className="py-2 px-3 w-full gap-3 h-full flex">
        <p className="font-medium text-lg w-full h-full">김어진 한국 방문</p>
        <div className="flex flex-col gap-2 min-w-fit">
          <div className="gap-1 items-center flex text-gray-400">
            <Map_Pin size={16} />
            <p className="font-medium text-[12px]">대전월드컵경기장</p>
          </div>
          <div className="gap-1 items-center flex text-gray-400">
            <Timer size={16} />
            <p className="font-medium text-[12px]">08:00~09:30</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CalendarGrid = ({ events, daysInMonth, startDay }) => {
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  return (
    <div className="grid grid-cols-7 gap-y-4 w-full">
      {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
        <div key={day} className="text-center font-medium text-gray-500">
          {day}
        </div>
      ))}
      {Array.from({ length: startDay }, (_, i) => (
        <div key={`empty-${i}`} className="h-20" />
      ))}
      {daysArray.map((day) => (
        <div
          key={day}
          className="border-t border-gray-100 h-20 p-2 flex flex-col justify-between"
        >
          <p className="text-gray-800 font-medium text-sm">{day}</p>
          {events[day] && (
            <div className="text-xs text-gray-500 bg-gray-100 p-0.5 rounded-sm">
              <p className="font-semibold">{events[day].title}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const Calendar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const date = new Date();
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth());

  const getDaysInMonth = (year, month) =>
    new Date(year, month + 1, 0).getDate();
  const getStartDay = (year, month) => new Date(year, month, 1).getDay();

  const daysInMonth = getDaysInMonth(year, month);
  const startDay = getStartDay(year, month);

  const navigate = useNavigate();
  const handlePrevMonth = () => {
    setMonth((prev) => (prev === 0 ? 11 : prev - 1));
    if (month === 0) setYear((prev) => prev - 1);
  };

  const handleNextMonth = () => {
    setMonth((prev) => (prev === 11 ? 0 : prev + 1));
    if (month === 11) setYear((prev) => prev + 1);
  };
  const events = {
    16: {
      title: "김어진 한국 방문",
      location: "대전월드컵경기장",
      time: "08:00~09:30",
    },
    19: {
      title: "김어진 한국 방문",
      location: "대전월드컵경기장",
      time: "08:00~09:30",
    },
  };
  const [isListStyle, setIsListStyle] = useState(true);
  return (
    <div className="flex w-full flex-col gap-4 relative min-h-full">
      <div className="p-2 flex justify-between w-full items-center bg-white">
        <button
          onClick={handlePrevMonth}
          className="p-2 border border-gray-200 flex rounded-lg hover:bg-gray-100"
        >
          <Arrow_Chevron className="text-gray-600" />
        </button>
        <p className="font-medium text-[20px]">
          {year}년 {month + 1}월
        </p>
        <button
          onClick={handleNextMonth}
          className="p-2 border border-gray-200 flex rounded-lg hover:bg-gray-100"
        >
          <Arrow_Chevron direction="right" className="text-gray-600" />
        </button>
      </div>
      <div className="p-1 gap-2 rounded-xl flex bg-gray-100 w-fit">
        <button
          onClick={() => setIsListStyle(true)}
          className={`flex p-1 border border-gray-100 ${
            isListStyle ? "bg-white border-gray-200" : ""
          } rounded-lg`}
        >
          <List />
        </button>
        <button
          onClick={() => setIsListStyle(false)}
          className={`flex p-1 border border-gray-100 ${
            !isListStyle ? "bg-white border-gray-200" : ""
          } rounded-lg`}
        >
          <Calendar_Days />
        </button>
      </div>
      {isListStyle ? (
        <div className="w-full flex flex-col gap-4">
          <Days />
        </div>
      ) : (
        <CalendarGrid
          events={events}
          daysInMonth={daysInMonth}
          startDay={startDay}
        />
      )}
      <div className="bg-black flex flex-col p-0.5 absolute bottom-0 right-0 rounded-full">
        <div
          className={`${
            isOpen ? "h-[120px] opacity-100" : "h-0 opacity-0 overflow-hidden"
          } transition-all flex flex-col`}
        >
          <button
            onClick={() => navigate("/add-schedule")}
            className="p-4 flex relative hover:bg-gray-800 rounded-full group"
          >
            <Calendar_Days className="text-white" />

            <div className="group-hover:-left-18 -left-12 whitespace-nowrap group-hover:opacity-100 transition-all absolute bg-gray-400 px-1.5 py-0.5 text-white opacity-0 rounded-md text-sm">
              일정 추가
            </div>
          </button>
          <button
            onClick={() => navigate("/add-diary")}
            className="p-4 flex relative hover:bg-gray-800 rounded-full group"
          >
            <Notebook className="text-white" />
            <div className="group-hover:-left-18 -left-12 whitespace-nowrap group-hover:opacity-100 transition-all absolute bg-gray-400 px-1.5 py-0.5 text-white opacity-0 rounded-md text-sm">
              일기 추가
            </div>
          </button>
        </div>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={`p-4 rounded-full ${isOpen ? "bg-white" : "bg-black"}`}
        >
          <Plus
            className={`transition-all ${
              isOpen ? "text-black rotate-45" : "text-white"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default Calendar;
