import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import PhoneLayout from "@/layout/phoneLayout";
import Login from "@/pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Routes>
      <Route element={<PhoneLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
  );
}

export default App;
