import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RecoilTest from "pages/RecoilTest";
import RecoilTest2 from "pages/RecoilTest2";
import Redux from "pages/Redux";

export default function CreateRoutes() {
  return (
    <Routes>
      <Route path='/redux' element={<Redux />} />
      <Route path='/recoil-test' element={<RecoilTest />} />
      <Route path='/recoil-test2' element={<RecoilTest2 />} />
      <Route path='*' element={<Navigate replace to='/redux' />} />
    </Routes>
  )
}