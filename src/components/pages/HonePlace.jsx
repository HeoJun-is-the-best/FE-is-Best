import { useAtom } from "jotai";
import HomeLayout from "../common/HomeLayout";
import { selectedSubjectStore } from "@/store/subject";
import newStyled from "@emotion/styled";
import { Arrow } from "@/assets";
import Modal from "../common/modal";
import { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const HomePlace = ({ places }) => {
  const [selectedSubject, setSelectedSubject] = useAtom(selectedSubjectStore);
  const [isOpen, setIsOpen] = useState(false);
  const [selectPlace, setSelectPlace] = useState(null);

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
            <div className="flex gap-[17px]">
              <div>
                <p>{selectPlace.title}</p>
                <div>
                  <p>{selectPlace.address}</p>
                </div>
              </div>
              <p>{selectPlace.description}</p>
              <img src={selectPlace.image} className="w-[122px] h-full" />
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
