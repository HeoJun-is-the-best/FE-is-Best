import { Link, useSearchParams } from "react-router-dom";
import HomeLayout from "../common/HomeLayout";
import newStyled from "@emotion/styled";
import { useAtom } from "jotai";
import { selectedSubjectTopicStore } from "@/store/subject";

const HomeNews = ({ news }) => {
  const [selectedSubjectTopic, setSelectedSubjectTopic] = useAtom(
    selectedSubjectTopicStore
  );
  return (
    <HomeLayout title={`이번달 ${selectedSubjectTopic} 관련 이슈`}>
      {news.map((v) => (
        <Link
          to={`https://search.naver.com/search.naver?where=news&ie=utf8&sm=nws_hty&query=${v.title}`}
          className="cursor-pointer"
        >
          <Container
            bgImg={v.image}
            className="w-full h-[230px] mt-[30px] text-white flex flex-col justify-end p-[18px_20px] rounded-2xl mb-[16px]"
          />
          <p className="text-[17px] text-start mt-2 whitespace-pre-wrap">
            {v.title}
          </p>
          <p className="text-sm text-start w-full text-[#737373] mt-1">
            {v.category}
          </p>
        </Link>
      ))}
    </HomeLayout>
  );
};

const Container = newStyled.div`
  background: 
    linear-gradient(180deg, color(display-p3 0 0 0 / 0.70) 0%, color(display-p3 0 0 0 / 0.00) 100%),
    url('${({ bgImg }) => bgImg}');
  background-size: cover; 
  background-position: center; 
`;

export default HomeNews;
