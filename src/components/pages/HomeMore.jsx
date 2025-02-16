import { useAtom } from "jotai";
import HomeLayout from "../common/HomeLayout";
import {
  selectedSubjectStore,
  selectedSubjectTopicStore,
  subjectStore,
} from "@/store/subject";
import { Arrow } from "@/assets";
import newStyled from "@emotion/styled";

const HomeMore = ({ moreImage }) => {
  const [selectedSubject, setSelectedSubject] = useAtom(selectedSubjectStore);
  const [subjectList, setSubjectList] = useAtom(subjectStore);
  const [selectedSubjectTopic, setSelectedSubjectTopic] = useAtom(
    selectedSubjectTopicStore
  );
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
              i.subTopics.map((j, idx) => (
                <Container
                  bgImg={moreImage[idx]}
                  className="w-[194px] h-[146px] p-4 rounded-3xl shrink-0 flex justify-between flex-col text-white"
                  onClick={() => setSelectedSubjectTopic(j.majorTopicTitle)}
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
          <div className="w-[194px] h-[146px] p-4 rounded-3xl shrink-0 flex justify-center items-center flex-col text-black bg-[#F5F5F5]">
            <p>관심사 변경하기</p>
          </div>
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
