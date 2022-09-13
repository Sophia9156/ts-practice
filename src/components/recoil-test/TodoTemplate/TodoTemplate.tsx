import React from "react";
import styled from "styled-components";
import TodoTitle from "components/recoil-test/TodoTitle/TodoTitle";
import TodoList from "components/recoil-test/TodoList/TodoList";
import TodoInput from "../TodoInput/TodoInput";

export default function TodoTemplate() {
  return (
    <TodoTemplateContainer>
      <div className="todoTemplate-contents">
        <TodoTitle />
        <TodoList />
        <TodoInput />
      </div>
    </TodoTemplateContainer>
  )
}
const TodoTemplateContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  background-color: var(--main);
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  .todoTemplate-contents{
    margin: auto;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    -ms-flex-direction: column;
    align-items: center;
  }
`;