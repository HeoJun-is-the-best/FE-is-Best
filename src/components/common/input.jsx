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
      <div className="bg-[#F5F5F5] p-[16px_20px] rounded-full flex">
        <input
          type={(!!secure && visible) || !!!secure ? "text" : "password"}
          placeholder={placeholder}
          id={id}
          className={`w-full outline-none text-[16px]`}
          value={value}
          onChange={onChange}
          autocomplete="off"
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
