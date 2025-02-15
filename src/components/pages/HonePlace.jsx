import { useAtom } from "jotai";
import HomeLayout from "../common/HomeLayout";
import { selectedSubjectStore } from "@/store/subject";
import newStyled from "@emotion/styled";
import { Arrow } from "@/assets";

const HomePlace = ({ places }) => {
  const [selectedSubject, setSelectedSubject] = useAtom(selectedSubjectStore);

  return (
    <HomeLayout
      title={
        <>
          내 주변에 있는
          <br />
          {selectedSubject} 관련 장소
        </>
      }
    >
      <div className="grid grid-cols-2 gap-[28px_6px]">
        {places.map((place, index) => (
          <div className="flex flex-col gap-6">
            <Container
              bgImg={place.image}
              className="w-full h-[197px] rounded-lg"
            />
            <div>
              <p className="text-[#171717]">{place.title}</p>
              <p className="text-[#A3A3A3] text-sm mt-1">{place.address}</p>
            </div>
          </div>
        ))}
        <button className="w-[110px] p-[10px] bg-[#171717] rounded-full text-[#E5E5E5] text-[13px] flex gap-[6px] justify-center items-center self-end mt-4 justify-self-end">
          더보기
          <Arrow direction="right" size={16} />
        </button>
      </div>
    </HomeLayout>
  );
};

const Container = newStyled.div`
      background: url('${({ bgImg }) => bgImg}') no-repeat center/cover;

`;

export default HomePlace;
