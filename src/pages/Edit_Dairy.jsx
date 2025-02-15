import { Topbar } from "@/components/common/Topbar";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Storage } from "@/storage";
import { RoundInput } from "@/components/common/RoundInput";

const EditDiary = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [diary, setDiary] = useState(null);
  const [titleValue, setTitleValue] = useState("");
  const [text, setText] = useState("");
  const textarea = useRef();

  useEffect(() => {
    const storedDiaries = JSON.parse(Storage.getItem("diaries")) || [];
    const foundDiary = storedDiaries.find((i) => i.id === Number(id));

    if (!foundDiary) {
      alert("존재하지 않는 일기입니다.");
      navigate("/diary");
      return;
    }

    setDiary(foundDiary);
    setTitleValue(foundDiary.title);
    setText(foundDiary.text);
  }, [id, navigate]);

  const handleResizeHeight = () => {
    textarea.current.style.height = "auto";
    textarea.current.style.height = textarea.current.scrollHeight + "px";
  };

  const handleSaveEdit = () => {
    if (!titleValue || !text) return;

    const updatedDiary = {
      ...diary,
      title: titleValue,
      text: text,
    };

    const storedDiaries = JSON.parse(Storage.getItem("diaries")) || [];
    const updatedDiaries = storedDiaries.map((i) =>
      i.id === Number(id) ? updatedDiary : i
    );

    Storage.setItem("diaries", JSON.stringify(updatedDiaries));
    alert("일기가 수정되었습니다.");
    navigate(`/diary`);
  };

  if (!diary) return null;

  return (
    <div className="w-full h-full flex flex-col gap-4 p-4">
      <Topbar
        title="일기 수정"
        onClick={() => navigate(-1)}
        button={
          <button
            onClick={handleSaveEdit}
            disabled={!(text.length > 0 && titleValue.length > 0)}
            className={`font-medium text-lg ${
              text.length > 0 && titleValue.length > 0
                ? "text-black"
                : "text-gray-300"
            }`}
          >
            저장
          </button>
        }
      />
      <RoundInput
        value={titleValue}
        placeholder="제목"
        onChange={(e) => setTitleValue(e.target.value)}
      />
      <div className="w-full rounded-2xl bg-gray-100 px-6 pt-6 pb-4 flex transition-all mb-12">
        <div
          className="relative w-full"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, transparent 39px, #ddd 40px)",
            backgroundSize: "100% 40px",
          }}
        >
          <textarea
            placeholder="일기 내용을 입력해 주세요"
            ref={textarea}
            onInput={handleResizeHeight}
            className="w-full outline-none leading-10 resize-none bg-transparent min-h-[70vh] h-auto"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default EditDiary;
