import { Arrow_Chevron, Plus } from "@/assets";
import { Nav } from "@/components/common/Nav";
import { DiaryList } from "@/components/pages/DiaryList";
import React, { useState, useEffect } from "react";
import { Storage } from "@/storage";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const Diary = () => {
  const navigate = useNavigate();
  const date = new Date();
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(date.getMonth() + 1);
  const [diaries, setDiaries] = useState([]);

  useEffect(() => {
    const storedDiaries = JSON.parse(Storage.getItem("diaries")) || [];
    const filteredDiaries = storedDiaries.filter((diary) => {
      const diaryDate = dayjs(diary.date, "YYYY/MM/DD");
      return diaryDate.year() === year && diaryDate.month() + 1 === month;
    });

    setDiaries(filteredDiaries);
  }, [year, month]);

  const handlePrevMonth = () => {
    setMonth((prev) => (prev === 1 ? 12 : prev - 1));
    if (month === 1) setYear((prev) => prev - 1);
  };

  const handleNextMonth = () => {
    setMonth((prev) => (prev === 12 ? 1 : prev + 1));
    if (month === 12) setYear((prev) => prev + 1);
  };

  return (
    <>
      <div className="px-[18px] py-5 flex w-full flex-col gap-2">
        <div className="p-2 flex justify-between w-full items-center bg-white">
          <button
            onClick={handlePrevMonth}
            className="p-2 border border-gray-200 flex rounded-lg hover:bg-gray-100"
          >
            <Arrow_Chevron className="text-gray-600" />
          </button>
          <p className="font-medium text-[20px]">
            {year}년 {month}월
          </p>
          <button
            onClick={handleNextMonth}
            className="p-2 border border-gray-200 flex rounded-lg hover:bg-gray-100"
          >
            <Arrow_Chevron direction="right" className="text-gray-600" />
          </button>
        </div>
        <div className="w-full flex flex-col">
          {diaries.length > 0 ? (
            diaries.map((diary, index) => (
              <DiaryList
                key={index}
                id={diary.id}
                title={diary.title}
                date={diary.date}
                content={diary.text}
              />
            ))
          ) : (
            <p className="text-gray-500 text-center py-4">
              작성된 일기가 없습니다.
            </p>
          )}
        </div>
      </div>
      <button
        onClick={() => navigate("/add-diary")}
        className="bg-black flex p-4 absolute bottom-24 right-[18px] rounded-full hover:bg-gray-800"
      >
        <Plus className="text-white" />
      </button>
      <Nav />
    </>
  );
};

export default Diary;
