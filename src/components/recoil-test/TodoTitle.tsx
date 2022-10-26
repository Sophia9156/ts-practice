import React from "react";
import styled from "styled-components";
import { GiWireCoil } from "react-icons/gi";

export default function TodoTitle() {
  return (
    <TodoTitleContainer>
      <GiWireCoil className="todoTitle-icon" />
      <div className="todoTitle-title">TodoList With Recoil</div>
    </TodoTitleContainer>
  )
}

const TodoTitleContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  align-items: center;
  font-size: 1.8rem;
  color: var(--white);
  margin-bottom: 10px;
  .todoTitle-icon{
    margin-right: 8px;
  }
`;