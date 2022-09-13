import React from "react";
import { RecoilRoot } from "recoil";
import TodoTemplate from "components/recoil-test/TodoTemplate/TodoTemplate";

export default function RecoilTest() {
  return (
    <RecoilRoot>
      <TodoTemplate />
    </RecoilRoot>
  )
}