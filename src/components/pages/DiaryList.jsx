import { useNavigate } from "react-router-dom";

export const DiaryList = ({ id, date, title, content }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col gap-3 py-10 border-b border-gray-100 px-2">
      <div className="w-full justify-between flex items-center">
        <p
          className="text-lg cursor-pointer font-medium"
          onClick={() => navigate(`/diary/${id}`)}
        >
          {title}
        </p>
        <p className="text-sm text-gray-400">{date}</p>
      </div>
      <p className="text-[16px] break-words line-clamp-2 text-gray-500 w-full overflow-hidden text-ellipsis">
        {content}
      </p>
    </div>
  );
};
