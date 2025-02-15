import { Outlet } from "react-router-dom";

const PhoneLayout = () => {
  return (
    <div className="w-screan h-screen bg-gray-100 flex justify-center">
      <div className="bg-white h-screen aspect-[1/1.965] pt-5 pb-5 pl-4.5 pr-4.5">
        <Outlet />
      </div>
    </div>
  );
};

export default PhoneLayout;
