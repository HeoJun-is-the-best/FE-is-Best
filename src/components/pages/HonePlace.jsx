import { useAtom } from "jotai";
import HomeLayout from "../common/HomeLayout";
import { selectedSubjectStore } from "@/store/subject";
import newStyled from "@emotion/styled";
import { Arrow, Copy } from "@/assets";
import Modal from "../common/modal";
import { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const HomePlace = ({ places }) => {
  const [selectedSubject, setSelectedSubject] = useAtom(selectedSubjectStore);
  const [isOpen, setIsOpen] = useState(false);
  const [selectPlace, setSelectPlace] = useState(null);

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 주소가 복사되었습니다.");
    } catch (e) {
      alert("주소에 실패하였습니다");
    }
  };

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
      <Modal isShow={isOpen} setIsShow={setIsOpen}>
        {selectPlace && (
          <>
            <div className="flex gap-[17px] mb-6">
              <div>
                <p>{selectPlace.title}</p>
                <div className="flex items-center justify-between text-[#A3A3A3] mt-[3px]">
                  <p>{selectPlace.address}</p>
                  <Copy
                    size={16}
                    onClick={() => handleCopyClipBoard(selectPlace.address)}
                  />
                </div>
                <p className="text-[#737373] mt-6">{selectPlace.description}</p>
              </div>
              <img
                src={selectPlace.image}
                className="w-[122px] h-full rounded-lg"
              />
            </div>
            <Map
              center={{ lat: selectPlace.lat, lng: selectPlace.lng }}
              style={{ width: "100%", height: "280px" }}
            >
              <MapMarker
                position={{ lat: selectPlace.lat, lng: selectPlace.lng }}
              ></MapMarker>
            </Map>
          </>
        )}
      </Modal>
      <div className="grid grid-cols-2 gap-[28px_6px]">
        {places.map((place, index) => (
          <button
            onClick={() => {
              setIsOpen(true);
              setSelectPlace(place);
            }}
            className="flex flex-col gap-6 cursor-pointer"
          >
            <Container
              bgImg={place.image}
              className="w-full h-[197px] rounded-lg"
            />
            <div>
              <p className="text-[#171717] text-start">{place.title}</p>
              <p className="text-[#A3A3A3] text-start text-sm mt-1">
                {place.address}
              </p>
            </div>
          </button>
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
