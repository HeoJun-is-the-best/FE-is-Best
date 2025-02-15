import { PostSignupApi } from "@/api/api";
import { Arrow } from "@/assets";
import Button from "@/components/common/button";
import Input from "@/components/common/input";
import SelectTagList from "@/components/common/selectTagList";
import { Subject, SubjectList } from "@/constant/Subject";
import Layout from "@/layout/Layout";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [next, setNext] = useState(1);

  // 1단계
  const [data, setData] = useState({
    id: "",
    password: "",
    name: "",
  });
  const [passwordCheck, setPasswordCheck] = useState("");

  // 2단계
  const [tagData, setTagData] = useState([]);
  const [etcTag, setEtcTag] = useState("");

  // 3단계
  const [interestData, setInterestData] = useState({});
  const [interestEtcTags, setInterestEtcTags] = useState({});
  // API 로 받아온 관심사 리스트
  const [interestList, setInterestList] = useState([]);

  const navigate = useNavigate();

  const handleChange = (e) =>
    setData({ ...data, [e.target.id]: e.target.value });

  // 3단계 함수
  const handleInterestChange = (tag, selectedInterest) => {
    setInterestData((prev) => ({
      ...prev,
      [tag]: selectedInterest,
    }));
  };
  const handleInterestEtcTagChange = (tag, value) => {
    setInterestEtcTags((prev) => ({
      ...prev,
      [tag]: value,
    }));
  };
  const handleCreateInterestData = () => {
    if (etcTag.trim()) {
      const nextInterestData = tagData.reduce(
        (acc, tag) => ({ ...acc, [tag]: [] }),
        {}
      );
      const newInterestEtcTags = tagData.reduce(
        (acc, tag) => ({ ...acc, [tag]: "" }),
        {}
      );
      setInterestData(() => ({ ...nextInterestData, [etcTag]: [] }));
      setInterestEtcTags(() => ({ ...newInterestEtcTags, [etcTag]: "" }));
    } else {
      const nextInterestData = tagData.reduce(
        (acc, tag) => ({ ...acc, [tag]: [] }),
        {}
      );
      const newInterestEtcTags = tagData.reduce(
        (acc, tag) => ({ ...acc, [tag]: "" }),
        {}
      );
      setInterestData(() => nextInterestData);
      setInterestEtcTags(() => newInterestEtcTags);
    }
  };

  const { mutate: signupMutate } = useMutation({
    mutationKey: ["signup"],
    mutationFn: PostSignupApi,
    onSuccess: (data) => {
      if (data) {
        navigate("/login");
      }
    },
  });

  const handleSignup = () => {
    if (next === 1) {
      if (passwordCheck === data.password) {
        setNext(2);
      }
    } else if (next === 2) {
      setNext(3);
      handleCreateInterestData();
      // interestList API 호출
    } else {
      const apiData = {
        name: data.name,
        username: data.id,
        password: data.password,
        topic: Object.keys(interestData).map((v) => ({
          majorTopic: v,
          subTopic: interestData[v],
        })),
      };
      signupMutate(apiData);
    }
  };

  return (
    <Layout
      top={
        next !== 1 && (
          <div className="flex justify-between">
            <Arrow onClick={() => setNext(next - 1)} />
            <div className="flex gap-1">
              {next === 3 &&
                (etcTag.trim() ? [...tagData, etcTag.trim()] : tagData).map(
                  (v) => (
                    <span className="bg-[#262626] text-[#F5F5F5] rounded-full p-[10px_14px] cursor-pointer">
                      {v}
                    </span>
                  )
                )}
            </div>
          </div>
        )
      }
      bottom={
        <Button
          onClick={handleSignup}
          disabled={
            next === 1
              ? !(
                  data.id.trim() &&
                  data.password.trim() &&
                  passwordCheck.trim() &&
                  data.name.trim()
                )
              : next === 2
              ? !(etcTag.trim() ? [...tagData, etcTag.trim()] : tagData).length
              : next === 3
              ? ![
                  ...(etcTag.trim()
                    ? [...tagData, etcTag.trim()]
                    : tagData
                  ).map(
                    (v) => [...interestData[v], ...interestEtcTags[v]].length
                  ),
                ].every((v) => v)
              : false
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
            <div className="flex flex-col gap-5">
              <Input
                label="이름"
                value={data.name}
                placeholder="이름"
                onChange={handleChange}
                id="name"
              />
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
              <span className="mt-4">
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
              list={SubjectList}
              data={tagData}
              setData={(v) => setTagData(v)}
              etcTag={etcTag}
              setEtcTag={(v) => setEtcTag(v)}
            />
          </div>
        </div>
      ) : (
        <div className="pb-[100px] flex flex-col justify-center h-full">
          {(etcTag.trim() ? [...tagData, etcTag.trim()] : tagData).map(
            (v, i) => (
              <div className="mt-[48px]" key={i}>
                <p className="text-[24px] font-semibold mb-[26px]">
                  {v} 와(과) 관련된
                  <br />
                  관심사를 선택해주세요
                </p>
                <SelectTagList
                  max={2}
                  list={Subject[v] || interestList}
                  data={interestData[v]}
                  etcTag={interestEtcTags[v]}
                  setData={(value) => handleInterestChange(v, value)}
                  setEtcTag={(value) => handleInterestEtcTagChange(v, value)}
                />
              </div>
            )
          )}
        </div>
      )}
    </Layout>
  );
};

export default Signup;
