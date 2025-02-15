import { Topbar } from "@/components/common/Topbar";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Add_Diary = () => {
  const date = new Date();
  const day = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const textarea = useRef();
  const handleResizeHeight = () => {
    textarea.current.style.height = "auto";
    textarea.current.style.height = textarea.current.scrollHeight + "px";
  };
  return (
    <>
      <div
        className="w-full h-full flex flex-col gap-4 overflow-y-scroll"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <Topbar
          title="일기 작성"
          onClick={() => navigate(-1)}
          button={
            <button
              className={`font-medium text-lg ${
                text.length > 0 ? "text-black" : "text-gray-300"
              }`}
            >
              등록
            </button>
          }
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label="일기 날짜" defaultValue={dayjs(day)} />
        </LocalizationProvider>
        <div className="w-full rounded-2xl bg-gray-100 px-6 pt-6 pb-4 flex transition-all mb-12">
          <div
            className="relative w-full"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, transparent 39px, #ddd 40px)",
              backgroundSize: "100% 40px",
            }}
          >
            <textarea
              ref={textarea}
              onInput={handleResizeHeight}
              className="w-full outline-none leading-10 resize-none bg-transparent min-h-[70vh] h-auto"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="w-[480px] flex justify-end absolute bg-gray-100 py-2 px-4 bottom-0 left-0">
        <p className="font-medium text-sm text-gray-500">
          {text.length}
          <span className="text-gray-300">/1000</span>
        </p>
      </div>
    </>
  );
};

export default Add_Diary;
