import { Nav } from "@/components/common/Nav";
import { getImageSearchApi } from "@/api/image";
import { postNewsRecommend } from "@/api/news";
import { postPlacesRecommend } from "@/api/places";
import Header from "@/components/common/header";
import HomeBanner from "@/components/pages/HomeBanner";
import HomeEvent from "@/components/pages/HomeEvent";
import HomeMore from "@/components/pages/HomeMore";
import HomePlace from "@/components/pages/HonePlace";
import Layout from "@/layout/Layout";
import {
  selectedSubjectStore,
  selectedSubjectTopicStore,
  subjectStore,
} from "@/store/subject";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { GetEventApi } from "@/api/event";
import HomeNews from "@/components/pages/HomeNews";
import newStyled from "@emotion/styled";

const Home = () => {
  const [selectedSubject, setSelectedSubject] = useAtom(selectedSubjectStore);
  const [subjectList, setSubjectList] = useAtom(subjectStore);
  const [selectedSubjectTopic, setSelectedSubjectTopic] = useAtom(
    selectedSubjectTopicStore
  );

  const { data: places } = useQuery({
    queryKey: ["getPlacesRecommend", selectedSubject, selectedSubjectTopic],
    queryFn: () =>
      postPlacesRecommend({
        topics: selectedSubjectTopic ? selectedSubjectTopic : selectedSubject,
        count: 3,
      }),
    select: (data) => data.data,
  });

  const { data: news } = useQuery({
    queryKey: ["getNewsRecommend", selectedSubject],
    queryFn: () =>
      postNewsRecommend({
        subTopics: subjectList
          .map((i) => (i.title === selectedSubject ? i.subTopics : []))
          .flat()
          .map((i) => i.majorTopicTitle),
      }),
    select: (data) => data.data,
  });

  const { data: moreImage } = useQuery({
    queryKey: ["getImageSearchApi", selectedSubject],
    queryFn: () => getImageSearchApi(selectedSubject),
    select: (data) => data.data,
  });

  const { data: events } = useQuery({
    queryKey: ["GetEventApi", selectedSubject, selectedSubjectTopic],
    queryFn: () =>
      GetEventApi({
        topics: selectedSubject,
        count: selectedSubjectTopic ? 5 : 3,
      }),
    select: (data) => data.data,
  });

  return (
    <>
      <Layout className="relative flex flex-col">
        <Header />
        {!selectedSubjectTopic && news && <HomeBanner news={news} />}
        <div className="h-[20px]" />
        {events && (
          <HomeEvent
            events={events}
            title={selectedSubjectTopic || selectedSubject}
            more={!selectedSubjectTopic}
            noMore
          />
        )}
        {selectedSubjectTopic && news && <HomeNews news={news} />}
        <div className="h-[30px]" />
        {places && (
          <HomePlace
            places={places}
            title={selectedSubjectTopic || selectedSubject}
            noMore
          />
        )}
        {!selectedSubjectTopic && (
          <div className="h-[56px] border-b-2 border-solid border-[#F5F5F5] w-[calc(100%_-_36px)] m-auto" />
        )}
        {!selectedSubjectTopic && moreImage && (
          <HomeMore moreImage={moreImage.image_urls} moreBtn />
        )}
        <div className="h-[100px]" />
      </Layout>
      <Nav />
    </>
  );
};

export default Home;
