import { GetEventApi } from "@/api/event";
import { Arrow_Chevron } from "@/assets";
import HomeEvent from "@/components/pages/HomeEvent";
import Layout from "@/layout/Layout";
import { selectedSubjectStore, subjectStore } from "@/store/subject";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";

const MoreEvent = () => {
  const nav = useNavigate();

  const [selectedSubject, setSelectedSubject] = useAtom(selectedSubjectStore);
  const [subjectList, setSubjectList] = useAtom(subjectStore);

  const { data: events } = useQuery({
    queryKey: ["GetEventApi", selectedSubject, 10],
    queryFn: () =>
      GetEventApi({
        topics: selectedSubject,
        count: 10,
      }),
    select: (data) => data.data,
  });

  return (
    <Layout
      className="relative flex flex-col "
      top={
        <div className="p-[18px_20px] flex absolute top-0 left-0 bg-white w-full">
          <div className="flex cursor-pointer justify-center items-center gap-0.5">
            <Arrow_Chevron
              className="text-[#A3A3A3]"
              onClick={() => nav("/")}
            />
            <p className="text-[#A3A3A3]">돌아가기</p>
          </div>
        </div>
      }
    >
      <div className="h-[60px]"></div>
      {events && <HomeEvent events={events} more />}
      <div className="h-[30px]"></div>
    </Layout>
  );
};

export default MoreEvent;
