import React from "react";
import { Topbar } from "@/components/common/Topbar";
import Button from "@/components/common/button";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  DatePicker,
  LocalizationProvider,
  MobileTimePicker,
} from "@mui/x-date-pickers";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { RoundInput } from "@/components/common/RoundInput";
import { Map_Pin } from "@/assets";

const CustomDatePicker = styled(DatePicker)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "100px", // 둥글게
    fontSize: "16px",
    paddingRight: "20px",
    paddingLeft: "8px",
    backgroundColor: "#f3f4f6 !important",
    color: "#737373 !important",
  },
});
const CustomTimePicker = styled(MobileTimePicker)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "100px", // 둥글게
    fontSize: "16px",
    paddingLeft: "8px",
    backgroundColor: "#f3f4f6 !important",
    color: "#737373 !important",
  },
});

const Add_Schedule = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-full flex flex-col justify-between">
      <div className="w-full gap-2 flex flex-col">
        <Topbar onClick={() => navigate(-1)} title="일정 추가" />
        <div className="w-full flex flex-col gap-8">
          <RoundInput placeholder="제목" />
          <RoundInput
            placeholder="일정 장소"
            icon={<Map_Pin className="text-gray-400" />}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <CustomDatePicker
              format="YYYY/MM/DD"
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <CustomTimePicker format="a hh:mm" />
          </LocalizationProvider>
        </div>
      </div>
      <Button>완료</Button>
    </div>
  );
};

export default Add_Schedule;
