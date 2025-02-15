import { Outlet } from "react-router-dom";

const PhoneLayoutNoPadding = () => {
  return (
    <div className="w-screan h-screen bg-gray-100 flex justify-center">
      <div className="bg-white h-screen aspect-[1/1.965] relative">
        <Outlet />
      </div>
    </div>
  );
};

export default PhoneLayoutNoPadding;
