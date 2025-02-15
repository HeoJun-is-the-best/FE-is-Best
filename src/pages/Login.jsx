import { PostLoginApi } from "@/api/api";
import Button from "@/components/common/button";
import Input from "@/components/common/input";
import Layout from "@/layout/Layout";
import { Storage } from "@/storage";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setData({ ...data, [e.target.id]: e.target.value });

  const { mutate: loginMutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: PostLoginApi,
    onSuccess: ({ data }) => {
      Storage.setItem("id", data.id);
      Storage.setItem("username", data.username);
      navigate("/");
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const handleLogin = () => {
    if (data.username.length < 6 || data.username.length > 12) {
      alert("아이디는 6자 이상 12자 이하여야 합니다.");
      return;
    }
    if (data.password.length < 8 || data.password.length > 16) {
      alert("비밀번호는 8자 이상 16자 이하여야 합니다.");
      return;
    }
    loginMutate(data);
  };

  return (
    <Layout bottom={<Button onClick={handleLogin}>로그인</Button>}>
      <div className="grid grid-rows-[0.1fr_0.7fr_0.2fr] gap-16 w-full h-full p-[5%]">
        <div>
          <p className="text-[40px] font-semibold">로그인</p>
          <p className="text-[#71717A]">너의 덕질을 도와주는, 너덕</p>
        </div>
        <div className="flex flex-col gap-8">
          <Input
            label="아이디"
            value={data.username}
            placeholder="아이디 (6~12)"
            onChange={handleChange}
            id="username"
          />
          <Input
            label="비밀번호"
            value={data.password}
            placeholder="비밀번호 (8~16)"
            onChange={handleChange}
            id="password"
            secure
          />
          <span>
            계정이 없으신가요?
            <span
              className="font-bold ml-2 cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              회원가입
            </span>
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
