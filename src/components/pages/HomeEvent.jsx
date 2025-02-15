import { Arrow, Calendar_Days } from "@/assets";
import { selectedSubjectStore } from "@/store/subject";
import newStyled from "@emotion/styled";
import { useAtom } from "jotai";
import { Link, useNavigate } from "react-router-dom";
import HomeLayout from "../common/HomeLayout";

const Event = ({ event }) => {
  const nav = useNavigate();

  return (
    <Link to={event.link}>
      <BgImage
        bgImage={event.image}
        className="relative w-full h-[197px] rounded-[28px] text-white p-[18px] flex flex-col justify-between"
      >
        <div className="flex justify-between">
          <p>{event.title}</p>
          <p>{event.date}</p>
        </div>
        <p className="w-[55%] text-[#FAFAFA] opacity-80 text-sm">
          {event.description}
        </p>
        <button
          onClick={(e) => {
            e.preventDefault();
            alert("일정추가~");
          }}
          className="absolute bottom-[18px] cursor-pointer right-[18px] w-[34px] h-[34px] bg-[#FAFAFA] rounded-full flex items-center justify-center"
        >
          <Calendar_Days className="text-[#171717]" />
        </button>
      </BgImage>
    </Link>
  );
};

const HomeEvent = ({ events }) => {
  const [selectedSubject, setSelectedSubject] = useAtom(selectedSubjectStore);

  return (
    <HomeLayout
      title={
        <>
          이번달 주목 받는
          <br />
          {selectedSubject} 관련 행사
        </>
      }
    >
      <div className="flex flex-col gap-2">
        {events.map((event, index) => (
          <Event key={index} event={event} />
        ))}
      </div>
      <button className="w-[110px] p-[10px] bg-[#171717] rounded-full text-[#E5E5E5] text-[13px] flex gap-[6px] justify-center items-center self-end mt-4">
        더보기
        <Arrow direction="right" size={16} />
      </button>
    </HomeLayout>
  );
};

export default HomeEvent;

const BgImage = newStyled.div`
  background: url("${({ bgImage }) => bgImage}") no-repeat center/cover;
`;
