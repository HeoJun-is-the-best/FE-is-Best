import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import PhoneLayout from "./layout/phoneLayout";

function App() {
  return (
    <Routes>
      <Route element={<PhoneLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
