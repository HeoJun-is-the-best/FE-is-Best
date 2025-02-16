import { GetSchedule } from "@/api/schedules";
import { Arrow_Chevron, List, Calendar_Days, Plus, Notebook } from "@/assets";
import { Nav } from "@/components/common/Nav";
import { CalendarGrid } from "@/components/pages/CalendarGrid";
import { CalendarList } from "@/components/pages/CalendarList";
import { useOutsideClick } from "@/hook/useOutsideClick";
import { Storage } from "@/storage";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Calendar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const date = new Date();
  const [year, setYear] = useState(date.getFullYear() - 2);
  const [month, setMonth] = useState(date.getMonth());
  const outsideClickRef = useOutsideClick({
    onClickOutside: () => setIsOpen(false),
  });

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

  const { data: events } = useQuery({
    queryKey: ["GetSchedule", year, month],
    queryFn: () =>
      GetSchedule({
        userId: Storage.getItem("id"),
        year,
        month: month + 1,
      }),
    select: (data) => {
      return data.data.reduce((acc, item) => {
        const day = item.startDate.split("-")[2];
        acc[day * 1] = {
          title: item.title,
          description: item.description,
        };
        return acc;
      }, {});
    },
  });
  const [isListStyle, setIsListStyle] = useState(true);

  if (events)
    return (
      <>
        <div className="flex w-full flex-col gap-4 relative min-h-full overflow-hidden px-[18px] py-5">
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
              {Object.keys(events).map((i) => (
                <CalendarList
                  day={i}
                  num={i}
                  title={events[i].title}
                  description={events[i].description}
                />
              ))}
            </div>
          ) : (
            <CalendarGrid
              events={events}
              daysInMonth={daysInMonth}
              startDay={startDay}
              year={year}
              month={month}
            />
          )}
          <div className="bg-black flex flex-col p-0.5 absolute bottom-24 right-[18px] rounded-full">
            <div
              className={`${
                isOpen
                  ? "h-[120px] opacity-100"
                  : "h-0 opacity-0 overflow-hidden"
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
              ref={outsideClickRef}
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
        <Nav />
      </>
    );
};

export default Calendar;
