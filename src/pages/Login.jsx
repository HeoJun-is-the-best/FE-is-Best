import Button from "@/components/common/button";
import Input from "@/components/common/input";
import Layout from "@/layout/Layout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    id: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setData({ ...data, [e.target.id]: e.target.value });

  const handleLogin = () => {};

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
