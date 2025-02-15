// DiaryDetail.tsx
import { Topbar } from "@/components/common/Topbar";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Storage } from "@/storage";
import { More } from "@/assets";

const DiaryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [diary, setDiary] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedDiaries = JSON.parse(Storage.getItem("diaries")) || [];
    const foundDiary = storedDiaries.find((i) => i.id === Number(id));

    if (!foundDiary) {
      alert("존재하지 않는 일기입니다.");
      navigate("/diary");
      return;
    }

    setDiary(foundDiary);
  }, [id, navigate]);

  if (!diary) return null;
  const [_, month, day] = diary.date.split("/");

  const handleDelete = () => {
    const storedDiaries = JSON.parse(Storage.getItem("diaries")) || [];
    const updatedDiaries = storedDiaries.filter((i) => i.id !== Number(id));

    Storage.setItem("diaries", JSON.stringify(updatedDiaries));
    alert("일기가 삭제되었습니다.");
    navigate("/diary");
  };

  return (
    <div className="w-full h-full flex flex-col gap-4 p-4">
      <Topbar title={`${month}월 ${day}일 일기`} onClick={() => navigate(-1)} />
      <div className="w-full flex justify-between items-center">
        <p className="text-gray-400 text-sm">{diary.date}</p>
        <div className="relative">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <More className="text-gray-500 cursor-pointer" size={24} />
          </button>
          {menuOpen && (
            <div className="absolute overflow-hidden right-0 mt-2 w-24 bg-white border border-gray-200 rounded-lg shadow-md">
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => navigate(`/edit-diary/${id}`)}
              >
                수정
              </button>
              <button
                className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                onClick={handleDelete}
              >
                삭제
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="text-2xl font-bold w-full flex py-2 border-b border-gray-100">
        {diary.title}
      </div>
      <p className="text-lg text-gray-600 whitespace-pre-wrap">{diary.text}</p>
    </div>
  );
};

export default DiaryDetail;
