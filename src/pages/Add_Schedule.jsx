import { Topbar } from "@/components/common/Tobbar";
import Input from "@/components/common/input";
import React from "react";

const Add_Schedule = () => {
  return (
    <>
      <div className="w-full "></div>
      <div className="w-full flex flex-col gap-6">
        <Input label="제목" placeholder="제목" />
        <Input label="장소" placeholder="장소" />
        <Input label="시간" placeholder="시간" />
      </div>
    </>
  );
};

export default Add_Schedule;
