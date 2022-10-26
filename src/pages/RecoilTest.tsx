import React from "react";
import { RecoilRoot } from "recoil";
import TodoTemplate from "components/recoil-test/TodoTemplate";

export default function RecoilTest() {
  return (
    <main>
      <RecoilRoot>
        <TodoTemplate />
      </RecoilRoot>
    </main>
  )
}