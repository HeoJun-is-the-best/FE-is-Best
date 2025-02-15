import React, { useState } from "react";
import { Topbar } from "@/components/common/Topbar";
import Button from "@/components/common/button";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  DatePicker,
  LocalizationProvider,
  MobileTimePicker,
} from "@mui/x-date-pickers";
import dayjs from "dayjs";

import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { RoundInput } from "@/components/common/RoundInput";
import { Map_Pin } from "@/assets";
import { useMutation } from "@tanstack/react-query";
import { PostScheduleSave } from "@/api/schedules";
import { Storage } from "@/storage";

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
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const date = new Date();
  const [selectedDate, setSelectedDate] = useState(dayjs(date));

  const { mutate: saveMutate } = useMutation({
    mutationKey: ["PostScheduleSave"],
    mutationFn: () =>
      PostScheduleSave({
        userId: Storage.getItem("id"),
        title: title,
        description: description,
        startDate: selectedDate.format("YYYY-MM-DD"),
        endDate: selectedDate.format("YYYY-MM-DD"),
      }),
    onSuccess: () => navigate("/calendar"),
  });
  return (
    <div className="w-full min-h-full flex flex-col justify-between">
      <div className="w-full gap-2 flex flex-col">
        <Topbar onClick={() => navigate(-1)} title="일정 추가" />
        <div className="w-full flex flex-col gap-8">
          <RoundInput
            placeholder="제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <RoundInput
            placeholder="설명"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <CustomDatePicker
              format="YYYY/MM/DD"
              onChange={(newDate) => setSelectedDate(newDate)}
              value={selectedDate}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
      </div>
      <Button onClick={saveMutate}>완료</Button>
    </div>
  );
};

export default Add_Schedule;
