import { Topbar } from "@/components/common/Topbar";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Storage } from "@/storage";

const DiaryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [diary, setDiary] = useState(null);

  useEffect(() => {
    const storedDiaries = JSON.parse(Storage.getItem("diaries")) || [];
    const foundDiary = storedDiaries.find((_, index) => index === Number(id));

    if (!foundDiary) {
      alert("존재하지 않는 일기입니다.");
      navigate("/diary");
      return;
    }

    setDiary(foundDiary);
  }, [id, navigate]);

  if (!diary) return null;
  const [year, month, day] = diary.date.split("/");

  return (
    <div className="w-full h-full flex flex-col gap-4 p-4">
      <Topbar title={`${month}월 ${day}일 일기`} onClick={() => navigate(-1)} />
      <div className="text-gray-400 text-sm">{diary.date}</div>
      <div className="text-2xl font-bold w-full flex py-2 border-b border-gray-100">
        {diary.title}
      </div>
      <p className="text-lg text-gray-600 whitespace-pre-wrap">{diary.text}</p>
    </div>
  );
};

export default DiaryDetail;
