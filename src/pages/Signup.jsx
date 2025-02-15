import { Arrow } from "@/assets";
import Button from "@/components/common/button";
import Input from "@/components/common/input";
import SelectTagList from "@/components/common/selectTagList";
import Layout from "@/layout/Layout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const tagList = [
  "스포츠",
  "음악",
  "K-POP",
  "디자인",
  "건축",
  "일러스트레이터",
  "코딩",
];
const Signup = () => {
  const [next, setNext] = useState(1);

  // 1단계
  const [data, setData] = useState({
    id: "",
    password: "",
  });
  const [passwordCheck, setPasswordCheck] = useState("");

  // 2단계
  const [tagData, setTagData] = useState([]);
  const [etcTag, setEtcTag] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) =>
    setData({ ...data, [e.target.id]: e.target.value });

  const handleSignup = () => {
    if (next === 1) {
      if (passwordCheck === data.password) {
        setNext(2);
      }
    } else if (next === 2) {
      setNext(3);
    } else {
      // 회원가입
    }
  };

  return (
    <Layout
      top={next !== 1 && <Arrow onClick={() => setNext(next - 1)} />}
      bottom={
        <Button
          onClick={handleSignup}
          disabled={
            next === 1
              ? !(
                  data.id.trim() &&
                  data.password.trim() &&
                  passwordCheck.trim()
                )
              : !(etcTag.trim() ? [...tagData, etcTag.trim()] : tagData).length
          }
        >
          {next === 1 ? "다음" : next === 2 ? "주제 등록" : "회원가입"}
        </Button>
      }
    >
      {next === 1 ? (
        <>
          <div className="grid grid-rows-[0.1fr_0.7fr_0.2fr] gap-16 w-full h-full p-[5%]">
            <div>
              <p className="text-[40px] font-semibold">회원가입</p>
              <p className="text-[#71717A]">너의 덕질을 도와주는, 너덕</p>
            </div>
            <div className="flex flex-col gap-8">
              <Input
                label="아이디"
                value={data.id}
                placeholder="아이디 (6~12)"
                onChange={handleChange}
                id="id"
              />
              <Input
                label="비밀번호"
                value={data.password}
                placeholder="비밀번호 (8~16)"
                onChange={handleChange}
                id="password"
                secure
              />
              <Input
                label="비밀번호 확인"
                value={passwordCheck}
                placeholder="비밀번호 확인"
                onChange={(e) => setPasswordCheck(e.target.value)}
                id="passwordCheck"
                secure
              />
              <span>
                이미 계정이 존재하시나요?
                <span
                  className="font-bold ml-2 cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  로그인
                </span>
              </span>
            </div>
          </div>
        </>
      ) : next === 2 ? (
        <div>
          <div className="mt-[230px]">
            <p className="text-[24px] font-semibold mb-[26px]">
              지금 관심 갖고 있는
              <br />
              주제를 선택해주세요
            </p>
            <SelectTagList
              list={tagList}
              data={tagData}
              setData={setTagData}
              etcTag={etcTag}
              setEtcTag={setEtcTag}
            />
          </div>
        </div>
      ) : (
        <>{next}</>
      )}
    </Layout>
  );
};

export default Signup;
