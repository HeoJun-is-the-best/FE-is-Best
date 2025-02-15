import { Map_Pin, Timer } from "@/assets";

export const CalendarList = ({ day, num, title, location, time }) => {
  const arr = { 0: "일", 1: "월", 2: "화", 3: "수", 4: "목", 5: "금", 6: "토" };

  const date = new Date();
  const nowDate = date.getDate();
  const nowMonth = date.getMonth();
  const nowYear = date.getFullYear();

  const eventDate = new Date(nowYear, nowMonth, day);
  const eventDay = eventDate.getDay();

  const isPast = day < nowDate;
  const isToday = day == nowDate;

  return (
    <div
      className={`w-full flex gap-2 justify-center items-center h-20 rounded-lg transition-all ${
        isToday ? "bg-gray-100" : ""
      } ${isPast ? "opacity-50" : ""}`}
    >
      <div className="px-5 py-2 justify-center items-center flex flex-col text-gray-700">
        <p className="font-medium text-[14px] whitespace-nowrap">
          {arr[eventDay]}요일
        </p>
        <p className="font-semibold text-2xl">{num}</p>
      </div>
      <div className="h-[54px] w-[1px] bg-gray-200" />
      <div className="py-2 px-3 w-full gap-2 flex flex-col">
        <p className="font-medium text-lg w-full h-full">{title}</p>
        <div className="flex gap-3 min-w-fit">
          <div className="gap-1 items-center flex text-gray-400">
            <Map_Pin size={16} />
            <p className="font-medium text-[12px]">{location}</p>
          </div>
          <div className="gap-1 items-center flex text-gray-400">
            <Timer size={16} />
            <p className="font-medium text-[12px]">{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
