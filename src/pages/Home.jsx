import Header from "@/components/common/header";
import HomeBanner from "@/components/pages/HomeBanner";
import HomeEvent from "@/components/pages/HomeEvent";
import HomeMore from "@/components/pages/HomeMore";
import HomePlace from "@/components/pages/HonePlace";
import Layout from "@/layout/Layout";

const news = [
  {
    image:
      "https://i.pinimg.com/736x/3d/24/ff/3d24ffc760bb39551b687ca294adc072.jpg",
    title: "슈이 이것 뭐예요?👟\nF1(@f1)에서 종종 볼을 슛",
    sources: "아이즈메거진",
    category: "F1",
  },
];
const events = [
  {
    title: "2025시즌 K리그1 개막",
    date: "2.15",
    description: "[2025 한국축구 ③] K리그1~K4, 코리아컵까지... 새 별은?",
    link: "https://www.google.com",
    image:
      "https://i.pinimg.com/736x/3d/24/ff/3d24ffc760bb39551b687ca294adc072.jpg",
  },
  {
    title: "2025시즌 K리그1 개막",
    date: "2.15",
    description: "[2025 한국축구 ③] K리그1~K4, 코리아컵까지... 새 별은?",
    link: "https://www.google.com",
    image:
      "https://i.pinimg.com/736x/3d/24/ff/3d24ffc760bb39551b687ca294adc072.jpg",
  },
  {
    title: "2025시즌 K리그1 개막",
    date: "2.15",
    description: "[2025 한국축구 ③] K리그1~K4, 코리아컵까지... 새 별은?",
    link: "https://www.google.com",
    image:
      "https://i.pinimg.com/736x/3d/24/ff/3d24ffc760bb39551b687ca294adc072.jpg",
  },
];
const places = [
  {
    image:
      "https://i.pinimg.com/736x/54/06/d6/5406d6bac759851425da523ad02b7148.jpg",
    title: "대한축구협회",
    address: "서울 종로구 신문로2가 1-131",
    lat: 33.55635,
    lng: 126.795841,
    description: "대한축구협회는 대한민국의 축구를 총괄하는 기관이다.",
  },
  {
    image:
      "https://i.pinimg.com/736x/54/06/d6/5406d6bac759851425da523ad02b7148.jpg",
    title: "스노볼아이엔씨 축구장",
    address: "서울 용산구 동자동 56",
    lat: 33.55635,
    lng: 126.795841,
    description: "스노볼아이엔씨 축구장은 대한민국의 축구를 총괄하는 기관이다.",
  },
  {
    image:
      "https://i.pinimg.com/736x/54/06/d6/5406d6bac759851425da523ad02b7148.jpg",
    title: "이어가는 움직임",
    address: "서울 종로구 필운동 289",
    lat: 33.55635,
    lng: 126,
    description: "이어가는 움직임은 대한민국의 축구를 총괄하는 기관이다.",
  },
];

const Home = () => {
  return (
    <Layout className="relative flex flex-col">
      <Header />
      <HomeBanner news={news} />
      <div className="h-[100px]" />
      <HomeEvent events={events} />
      <div className="h-[100px]" />
      <HomePlace places={places} />
      <div className="h-[56px] border-b-2 border-solid border-[#F5F5F5] w-[calc(100%_-_36px)] m-auto" />
      <HomeMore />
      <div className="h-[100px]" />
    </Layout>
  );
};

export default Home;
