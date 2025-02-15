export const CalendarGrid = ({
  events,
  daysInMonth,
  startDay,
  year,
  month,
}) => {
  const date = new Date();
  const nowYear = date.getFullYear();
  const nowMonth = date.getMonth();
  const nowDay = date.getDate();
  const storedDiaries = JSON.parse(localStorage.getItem("diaries")) || [];

  const diaryDates = storedDiaries.map((diary) => {
    const [diaryYear, diaryMonth, diaryDay] = diary.date.split("/").map(Number);
    return { diaryYear, diaryMonth, diaryDay };
  });

  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="grid gap-y-2 w-full">
      <div className="grid grid-cols-7 gap-y-10 w-full">
        {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
          <div key={day} className="text-center font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-y-8 w-full">
        {Array.from({ length: startDay }, (_, i) => (
          <div key={`empty-${i}`} className="h-20" />
        ))}
        {daysArray.map((day) => {
          const hasDiary = diaryDates.some(
            ({ diaryYear, diaryMonth, diaryDay }) =>
              diaryYear === year && diaryMonth === month + 1 && diaryDay === day
          );

          return (
            <div
              key={day}
              className="border-t border-gray-100 h-20 p-2 flex flex-col justify-between gap-2"
            >
              <div
                className={`${
                  year === nowYear && month === nowMonth && nowDay === day
                    ? "bg-gray-900 text-white"
                    : hasDiary
                    ? "bg-gray-100 text-gray-800"
                    : "text-gray-800"
                } w-6 flex justify-center items-center rounded-full p-0.5`}
              >
                <p className="font-medium text-sm">{day}</p>
              </div>
              {year === nowYear && month === nowMonth && events[day] && (
                <div className="text-xs cursor-pointer text-gray-500 bg-gray-100 p-0.5 rounded-sm">
                  <p className="font-semibold">{events[day].title}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
