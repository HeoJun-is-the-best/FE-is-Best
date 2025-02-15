import { Hide, Show } from "@/assets";
import { useState } from "react";

const Input = ({
  label,
  value,
  onChange,
  id = "",
  placeholder,
  secure,
  ...props
}) => {
  const [visible, setVisible] = useState(false);

  const clickVisible = () => setVisible((prev) => !prev);

  return (
    <div>
      <span className="text-[16px] font-bold text-black">{label}</span>
      <div
        className={`relative flex items-center border-b w-full h-fit ${
          !!value ? "border-black" : "border-gray300"
        }`}
      >
        <input
          type={(!!secure && visible) || !!!secure ? "text" : "password"}
          placeholder={placeholder}
          id={id}
          className={`w-full h-10 outline-none text-medium20`}
          value={value}
          onChange={onChange}
          {...props}
        />

        {!!secure && (
          <div className="cursor-pointer">
            {visible ? (
              <Show onClick={clickVisible} />
            ) : (
              <Hide onClick={clickVisible} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
