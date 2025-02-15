import {
  Arrow_Chevron,
  List,
  Calendar_Days,
  Timer,
  Map_Pin,
  Plus,
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

const CalendarGrid = ({ events }) => {
  const daysInMonth = 30; // 예시로 30일 설정
  const startDay = 2; // 예시로 수요일부터 시작하도록 설정
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="grid grid-cols-7 gap-y-4 p-2 w-full">
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
  const navigate = useNavigate();
  const events = {
    16: {
      title: "김어진 한국 방문",
      location: "대전월드컵경기장",
      time: "08:00~09:30",
    },
  };
  const [isListStyle, setIsListStyle] = useState(true);
  return (
    <div className="flex w-full flex-col gap-4 relative min-h-full">
      <div className="p-2 flex justify-between w-full items-center bg-white">
        <button className="p-2 border border-gray-100 flex rounded-lg hover:bg-gray-100">
          <Arrow_Chevron className="text-gray-600" />
        </button>
        <p className="font-medium text-[20px]">2025년 10월</p>
        <button className="p-2 border border-gray-100 flex rounded-lg hover:bg-gray-100">
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
        <CalendarGrid events={events} />
      )}
      <button
        onClick={() => navigate("/add-schedule")}
        className="p-5 rounded-full bg-black w-fit absolute bottom-0 right-0"
      >
        <Plus className="text-white" />
      </button>
    </div>
  );
};

export default Calendar;
