import Session1 from "pages/Session1";
import Session2 from "pages/Session2";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

export default function CreateRoutes() {
  return (
    <Routes>
      <Route path='/session1' element={<Session1 />} />
      <Route path='/session2' element={<Session2 />} />
      <Route path='*' element={<Navigate replace to='/session1' />} />
    </Routes>
  )
}