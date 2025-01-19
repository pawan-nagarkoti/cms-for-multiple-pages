import React from "react";
import { Route, Routes } from "react-router-dom";
import { Landing, PrivacyPolicy } from "./pages";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </>
  );
}
