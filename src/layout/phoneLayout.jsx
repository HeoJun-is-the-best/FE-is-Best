import { Outlet } from "react-router-dom";

const PhoneLayout = () => {
  return (
    <div className="w-screan h-[845px] bg-gray-100 flex justify-center">
      <div className="bg-white h-[845px] aspect-[1/1.965] pt-5 pb-5 pl-4.5 pr-4.5 relative">
        <Outlet />
      </div>
    </div>
  );
};

export default PhoneLayout;
