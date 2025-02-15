import { Arrow, Calendar_Days } from "@/assets";
import { selectedSubjectStore } from "@/store/subject";
import newStyled from "@emotion/styled";
import { useAtom } from "jotai";
import { Link, useNavigate } from "react-router-dom";
import HomeLayout from "../common/HomeLayout";
import { useMutation } from "@tanstack/react-query";
import { PostScheduleSave } from "@/api/schedules";
import { Storage } from "@/storage";

function formatDate(input) {
  const [yy, mm, dd] = input.split(".").map(Number);
  const fullYear = yy < 50 ? 2000 + yy : 1900 + yy;
  return `${fullYear}-${String(mm).padStart(2, "0")}-${String(dd).padStart(
    2,
    "0"
  )}`;
}
const Event = ({ event }) => {
  const { mutate: addEventMutate } = useMutation({
    mutationKey: ["PostScheduleSave"],
    mutationFn: () =>
      PostScheduleSave({
        userId: Storage.getItem("id"),
        title: event.title,
        description: event.description,
        startDate: formatDate(event.startDate),
        endDate: formatDate(event.endDate),
      }),
    onSuccess: () => alert("일정 추가 완료"),
  });

  return (
    <Link to={event.link}>
      <BgImage
        bgImage={event.thumbnail}
        className="relative w-full h-[197px] rounded-[28px] text-white p-[18px] flex flex-col justify-between"
      >
        <div className="flex justify-between">
          <p>{event.title}</p>
          <p>
            {event.startDate}-{event.endDate}
          </p>
        </div>
        <p className="w-[55%] text-[#FAFAFA] opacity-80 text-sm">
          {event.description}
        </p>
        <button
          onClick={(e) => {
            e.preventDefault();
            addEventMutate();
          }}
          className="absolute bottom-[18px] cursor-pointer right-[18px] w-[34px] h-[34px] bg-[#FAFAFA] rounded-full flex items-center justify-center"
        >
          <Calendar_Days className="text-[#171717]" />
        </button>
      </BgImage>
    </Link>
  );
};

const HomeEvent = ({ events, more, title, noMore }) => {
  return (
    <HomeLayout
      title={
        more ? (
          <> 이번달 주목 받는 {title} 관련 행사</>
        ) : (
          <>
            이번달 주목 받는
            <br />
            {title} 관련 행사
          </>
        )
      }
    >
      <div className="flex flex-col gap-2">
        {events.map((event, index) => (
          <Event key={index} event={event} />
        ))}
      </div>
      {!noMore && !more && (
        <Link
          to="/event"
          className="w-[110px] p-[10px] bg-[#171717] rounded-full text-[#E5E5E5] text-[13px] flex gap-[6px] justify-center items-center self-end mt-4"
        >
          더보기
          <Arrow direction="right" size={16} />
        </Link>
      )}
    </HomeLayout>
  );
};

export default HomeEvent;

const BgImage = newStyled.div`
  background: 
    linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.5) 100%),
    url('${({ bgImage }) => bgImage}') no-repeat center/cover;
`;
