import React, { useCallback, useState } from "react";
import { FaPen } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { SetterOrUpdater } from "recoil";
import { ITodoTypes } from "recoil/todos";
import styled from "styled-components";
import TodoModal from "components/recoil-test/TodoModal";

interface PropTypes {
  id: number;
  contents: string;
  isCompleted: boolean;

  onComplete: (id: number) => void;
  onDelete: (id: number) => void;

  todos: ITodoTypes[];
  setTodos: SetterOrUpdater<ITodoTypes[]>;
}

export default function TodoItem({
  id,
  contents,
  isCompleted,
  onComplete,
  onDelete,
  todos,
  setTodos,
}: PropTypes) {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [modifyContents, setModifyContents] = useState<string>('');

  const onModify = useCallback((): void => {
    setIsModal(true);
    setModifyContents(contents);
  }, [contents]);

  const onModifyTodo = useCallback((): void => {
    if(!modifyContents.trim()) {
      return;
    }

    setTodos(todos.map((todo: ITodoTypes) => {
      return todo.id === id ? { ...todo, contents: modifyContents } : todo;
    }));

    setIsModal(false);
  }, [id, modifyContents, setTodos, todos]);

  return (
    <>
      {isModal && 
        <TodoModal 
          setIsModal={setIsModal}
          modifyContents={modifyContents}
          setModifyContents={setModifyContents}
          onModifyTodo={onModifyTodo}
        /> 
      }
      <TodoItemContainer>
        <div
          title={contents}
          className={isCompleted ? 'todoItem-completed' : ''}
          onClick={() => onComplete(id)}
        >
          {contents}
        </div>
        <div className="todoItem-icons">
          <FaPen className="todoItem-icons-Pen" onClick={onModify} />
          <MdClose className="todoItem-icons-Close" onClick={() => onDelete(id)} />
        </div>
      </TodoItemContainer>
    </>
  )
}

const TodoItemContainer = styled.div`
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding-bottom: 6px;
  border-bottom: 1px solid var(--white);
  font-size: 1.2rem;

  -moz-user-select: none;
  -webkit-user-drag: none;
  
  .todoItem-completed{
    text-decoration-line: line-through;
    text-decoration-color: var(--red);
  }

  & > * {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
  }

  .todoItem-icons{
    display: flex;
    display: -webkit-flex;
    align-items: center;
    .todoItem-icons-Pen{
      color: var(--green);
    }
    .todoItem-icons-Close{
      color: var(--red);
      font-size: 1.9rem;
    }
  }
`;
