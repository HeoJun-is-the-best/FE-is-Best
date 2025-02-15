import React from "react";
import { Topbar } from "@/components/common/Tobbar";
import Button from "@/components/common/button";
import Input from "@/components/common/input";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  DatePicker,
  LocalizationProvider,
  MobileTimePicker,
} from "@mui/x-date-pickers";
import { useNavigate } from "react-router-dom";

const Add_Schedule = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-full flex flex-col justify-between">
      <div className="w-full gap-2 flex flex-col">
        <Topbar onClick={() => navigate(-1)} title="일정 추가" />
        <div className="w-full flex flex-col gap-8">
          <Input label="제목" placeholder="제목 입력" />
          <Input label="장소" placeholder="장소 입력" />
          <div className="w-full flex flex-col gap-2">
            <span className="text-[16px] font-bold text-black">날짜</span>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="날짜 입력" />
            </LocalizationProvider>
          </div>
          <div className="w-full flex flex-col gap-2">
            <span className="text-[16px] font-bold text-black">시간</span>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileTimePicker label="시간 입력" />
            </LocalizationProvider>
          </div>
        </div>
      </div>
      <Button>완료</Button>
    </div>
  );
};

export default Add_Schedule;
