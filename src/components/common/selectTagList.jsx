import newStyled from "@emotion/styled";
import { useEffect, useState } from "react";

const SelectTagList = ({ list, data, setData, etcTag, setEtcTag, max = 3 }) => {
  const onClick = (e) => {
    const name = e.target.name;
    if (data.includes(name)) {
      setData(data.filter((item) => item !== name));
    } else {
      if (etcTag.trim().length > 0) {
        if (data.length < max - 1) {
          setData([...data, name]);
        }
      } else {
        if (data.length < max) {
          setData([...data, name]);
        }
      }
    }
  };

  const [inputWidth, setInputWidth] = useState(50);

  useEffect(() => {
    const textLength = etcTag.length;
    const width = Math.max(textLength * 16, 28);
    setInputWidth(width);
  }, [etcTag]);

  return (
    <div className="flex flex-wrap gap-[4px_6px]">
      {list.map((v) => (
        <label
          className={`relative ${
            data.includes(v)
              ? "bg-[#262626] text-[#F5F5F5]"
              : "bg-[#F5F5F5] text-[#262626]"
          } rounded-full
          p-[10px_14px]
          text-[14px]
          cursor-pointer`}
          key={v}
        >
          {v}
          <input
            onClick={onClick}
            name={v}
            type="checkbox"
            className="absolute top-0 left-0 w-0 h-0 opacity-0"
          />
        </label>
      ))}
      <label
        className={`relative ${
          etcTag.trim().length
            ? "bg-[#262626] text-[#F5F5F5]"
            : "bg-[#F5F5F5] text-[#262626]"
        } rounded-full
          p-[10px_14px]
          cursor-pointer`}
      >
        <InputEtc
          value={etcTag}
          onChange={(e) => setEtcTag(e.target.value)}
          placeholder="기타"
          inputWidth={inputWidth}
          disabled={!data.includes(etcTag) && data.length >= 3}
        />
      </label>
    </div>
  );
};

const InputEtc = newStyled.input`
    &:focus{
        outline:none;
    }
    width: ${({ inputWidth }) => `${inputWidth}px`};
`;

export default SelectTagList;
