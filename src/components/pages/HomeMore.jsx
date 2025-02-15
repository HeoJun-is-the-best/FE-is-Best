import { useAtom } from "jotai";
import HomeLayout from "../common/HomeLayout";
import { selectedSubjectStore, subjectStore } from "@/store/subject";

const HomeMore = () => {
  const [selectedSubject, setSelectedSubject] = useAtom(selectedSubjectStore);
  const [subjectList, setSubjectList] = useAtom(subjectStore);

  return (
    <HomeLayout
      title={
        <>
          {selectedSubject} 관련 관심사들을 <br />더 자세히 알아보세요
        </>
      }
    >
      {subjectList.map(
        (i) =>
          i.title === selectedSubject &&
          i.subTopics.map((j) => <div>{j.majorTopicTitle}</div>)
      )}
    </HomeLayout>
  );
};

export default HomeMore;
