import { Topbar } from "@/components/common/Tobbar";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Add_Diary = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const textAreaRef = useRef(null);
  const [height, setHeight] = useState(280); // 기본 높이 (70vh 정도)

  // textarea 높이에 따라 부모 div 크기 조절
  useEffect(() => {
    if (textAreaRef.current) {
      setHeight(Math.max(280, textAreaRef.current.scrollHeight + 20)); // 최소 280px 유지
    }
  }, [text]);
  return (
    <div
      className="w-full h-full flex flex-col gap-4 overflow-y-scroll"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <Topbar
        onClick={() => navigate(-1)}
        button={<button className="px-4 font-medium text-lg">등록</button>}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="날짜 입력" />
      </LocalizationProvider>
      <div
        className="w-full rounded-2xl bg-gray-100 p-6 flex transition-all"
        style={{ minHeight: height }}
      >
        <div
          className="relative w-full"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, transparent 39px, #ddd 40px)",
            backgroundSize: "100% 40px",
          }}
        >
          <textarea
            ref={textAreaRef}
            className="w-full outline-none leading-10 resize-none bg-transparent"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ minHeight: "70vh", height: "auto", overflow: "hidden" }}
          />
        </div>
      </div>
      <div className="w-full absolute"></div>
    </div>
  );
};

export default Add_Diary;
