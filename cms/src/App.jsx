import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { LandingPageForm, LandingPageTable } from "./pages";
import { useEffect } from "react";
export default function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/landing-page");
  }, []);
  return (
    <Routes>
      <Route path="/" element={<LandingPageTable />} />
      <Route path="/landing-page" element={<LandingPageForm />} />
    </Routes>
  );
}
