import { useAtom } from "jotai";
import HomeLayout from "../common/HomeLayout";
import { selectedSubjectStore, subjectStore } from "@/store/subject";
import { Arrow } from "@/assets";
import newStyled from "@emotion/styled";

const HomeMore = () => {
  const [selectedSubject, setSelectedSubject] = useAtom(selectedSubjectStore);
  const [subjectList, setSubjectList] = useAtom(subjectStore);

  return (
    <div className="flex flex-col gap-[10px]">
      <p className="text-lg font-semibold p-[18px]">
        {selectedSubject} 관련 관심사들을 <br />더 자세히 알아보세요
      </p>
      <div className="flex flex-col">
        <div className="flex overflow-x-scroll w-[430px] noscroll gap-[6px] pl-[18px] pr-[18px]">
          {subjectList.map(
            (i) =>
              i.title === selectedSubject &&
              i.subTopics.map((j) => (
                <Container
                  bgImg="https://i.pinimg.com/736x/3d/24/ff/3d24ffc760bb39551b687ca294adc072.jpg"
                  className="w-[194px] h-[146px] p-4 rounded-3xl shrink-0 flex justify-between flex-col text-white"
                >
                  <p className="text-sm opacity-80">
                    {j.majorTopicTitle}에 대한 최신
                    <br />
                    정보들을 알려드려요
                  </p>
                  <div className="flex justify-between">
                    <p className="text-[17px]">{j.majorTopicTitle}</p>
                    <Arrow direction="right" />
                  </div>
                </Container>
              ))
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeMore;

const Container = newStyled.div`
  background: 
    linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%),
    url('${({ bgImg }) => bgImg}');
  background-size: cover;
  background-position: center;
`;
