import { Plus } from "@/assets";

const Modal = ({ isShow, setIsShow, children }) => {
  return (
    <>
      {isShow && (
        <div
          className={`fixed gap-2 top-0 left-0 w-full h-full bg-black/80 z-50 flex justify-center items-center p-[18px] flex-col`}
        >
          <button
            className="cursor-pointer bg-[#FAFAFA] w-8 h-8 rounded-full flex justify-center items-center self-end"
            onClick={() => setIsShow(false)}
          >
            <Plus className=" rotate-45" />
          </button>
          <div className="bg-[#FAFAFA] w-full p-[15px] rounded-[10px]">
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
