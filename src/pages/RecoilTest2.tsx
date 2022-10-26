import React from "react";
import { RecoilRoot } from "recoil";
import List from "components/recoil-test2/List";

export default function RecoilTest2() {
  return (
    <main>
      <RecoilRoot>
        <List />
      </RecoilRoot>
    </main>
  )
}