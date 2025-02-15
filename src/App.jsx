import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import PhoneLayout from "@/layout/phoneLayout";
import Login from "@/pages/Login";
import Signup from "./pages/Signup";
import Calendar from "./pages/Calendar";
import Add_Schedule from "./pages/Add_Schedule";

function App() {
  return (
    <Routes>
      <Route element={<PhoneLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/add-schedule" element={<Add_Schedule />} />
      </Route>
    </Routes>
  );
}

export default App;
