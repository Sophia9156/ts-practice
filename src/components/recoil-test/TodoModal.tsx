import React, { ChangeEvent, Dispatch, SetStateAction, useCallback } from "react";
import { FaPen } from "react-icons/fa";
import styled from "styled-components";

interface PropTypes {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  modifyContents: string;
  setModifyContents: Dispatch<SetStateAction<string>>;
  onModifyTodo: () => void;
}

export default function TodoModal({
  setIsModal,
  modifyContents,
  setModifyContents,
  onModifyTodo,
}: PropTypes) {
  const onCloseModal = useCallback((): void => {
    setIsModal(false);
  }, [setIsModal]);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setModifyContents(value);
  }, [setModifyContents]);

  return (
    <TodoModalContainer>
      <div className="todoModal-overlay" onClick={onCloseModal}></div>
      <div className="todoModal">
        <div className="todoModal-title">
          <div>Todo 수정하기</div>
          <FaPen />
        </div>
        <div className="todoModal-contents">
          <input
            type="text"
            className="todoModal-contents-input"
            value={modifyContents}
            onChange={onChange}
            placeholder="Todo 입력"
          />
          <button
            className="todoModal-contents-button"
            onClick={onModifyTodo}
          >
            수정하기
          </button>
        </div>
      </div>
    </TodoModalContainer>
  )
}

const TodoModalContainer = styled.div`
  .todoModal-overlay{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 2;
  }
  .todoModal{
    width: 40%;
    height: 40%;
    background-color: var(--white);
    padding: 1.6rem;
    border-radius: 10px;
    overflow-x: hidden;
    overflow-y: auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    -ms-flex-direction: column;
    align-items: center;
    .todoModal-title{
      display: flex;
      display: -webkit-flex;
      align-items: center;
      margin-bottom: 12px;

      & > div {
        font-size: 1.5rem;
        margin-right: 6px;
      }
    }
    .todoModal-contents{
      display: flex;
      display: -webkit-flex;
      flex-grow: 1;
      flex-direction: column;
      -ms-flex-direction: column;
      justify-content: center;
      align-items: center;
      .todoModal-contents-input{
        outline: none;
        border: none;
        border-bottom: 2px solid var(--main);
        margin-bottom: 10px;
        padding: 5px 0;
        font-size: 1.3rem;
      }
      .todoModal-contents-button{
        width: 100%;
        height: 50px;
        outline: none;
        border: none;
        color: var(--white);
        background-color: var(--main);
        font-size: 1.2rem;
        cursor: pointer;
      }
    }
  }
`;