import newStyled from "@emotion/styled";

const HomeBanner = ({ news }) => {
  return (
    <>
      {news.map((i) => (
        <Container
          bgImg={i.image}
          className="w-full h-[600px] mt-[62px] text-white flex flex-col justify-end p-[18px_20px]"
        >
          <p className="text-sm">{i.category}</p>
          <p className="text-2xl mt-2 whitespace-pre-wrap">{i.title}</p>
          <p className="text-sm text-[#D4D4D4] mt-[21px]">{i.sources}</p>
        </Container>
      ))}
    </>
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
