import newStyled from "@emotion/styled";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import { Link } from "react-router-dom";

const HomeBanner = ({ news }) => {
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }

  const renderSlides = news.map((i) => (
    <Link
      to={`https://search.naver.com/search.naver?where=news&ie=utf8&sm=nws_hty&query=${i.title}`}
    >
      <Container
        bgImg={i.image}
        className="w-full h-[600px] mt-[62px] text-white flex flex-col justify-end p-[18px_20px]"
      >
        <p className="text-sm text-start w-full">{i.category}</p>
        <p className="text-2xl text-start mt-2 whitespace-pre-wrap">
          {i.title}
        </p>
        <p className="text-sm text-start text-[#D4D4D4] mt-[21px]">
          {i.sources}
        </p>
      </Container>
    </Link>
  ));

  return (
    <div className="w-[430px]">
      <Carousel
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        selectedItem={news[currentIndex]}
        onChange={handleChange}
      >
        {renderSlides}
      </Carousel>
    </div>
  );
};

const Container = newStyled.div`
  background: 
    linear-gradient(180deg, color(display-p3 0 0 0 / 0.70) 0%, color(display-p3 0 0 0 / 0.00) 100%),
    url('${({ bgImg }) => bgImg}');
  background-size: cover; 
  background-position: center; 
`;

export default HomeBanner;
