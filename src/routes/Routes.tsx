import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RecoilTest from "pages/RecoilTest";
import RecoilTest2 from "pages/RecoilTest2";
import Redux from "pages/Redux";
import Zustand from "pages/Zustand";

export default function CreateRoutes() {
  return (
    <Routes>
      <Route path='/redux' element={<Redux />} />
      <Route path='/recoil-test' element={<RecoilTest />} />
      <Route path='/recoil-test2' element={<RecoilTest2 />} />
      <Route path='/zustand' element={<Zustand />} />
      <Route path='*' element={<Navigate replace to='/redux' />} />
    </Routes>
  )
}