import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import PhoneLayout from "@/layout/phoneLayout";
import Login from "@/pages/Login";
import Signup from "./pages/Signup";
import Calendar from "./pages/Calendar";
import Add_Schedule from "./pages/Add_Schedule";
import PhoneLayoutNoPadding from "@/layout/PhoneLayoutNoPadding";
import Add_Diary from "./pages/Add_Diary";
import Diary from "./pages/Diary";
import DiaryDetail from "./pages/DiaryDetail";
import MorePlace from "./pages/More_Place";
import EditDiary from "./pages/Edit_Dairy";
import MoreEvent from "./pages/More_Event";

function App() {
  return (
    <Routes>
      <Route element={<PhoneLayoutNoPadding />}>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/diary/:id" element={<DiaryDetail />} />
        <Route path="/place" element={<MorePlace />} />
        <Route path="/edit-diary/:id" element={<EditDiary />} />
        <Route path="/event" element={<MoreEvent />} />
      </Route>

      <Route element={<PhoneLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/add-schedule" element={<Add_Schedule />} />
        <Route path="/add-diary" element={<Add_Diary />} />
      </Route>
    </Routes>
  );
}

export default App;
