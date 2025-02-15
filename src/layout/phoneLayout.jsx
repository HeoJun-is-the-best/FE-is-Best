import { Outlet } from "react-router-dom";

const PhoneLayout = () => {
  return (
    <div className="w-screan h-screen bg-gray-100 flex justify-center">
      <div className="bg-white h-screen aspect-[1/1.965] ">
        <Outlet />
      </div>
    </div>
  );
};

export default PhoneLayout;
