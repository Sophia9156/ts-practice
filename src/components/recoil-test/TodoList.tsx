import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { ITodoTypes, todosState } from "modules/recoil/todos";
import styled from "styled-components";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [todos, setTodos] = useRecoilState<ITodoTypes[]>(todosState);
  
  const onComplete = useCallback((id: number): void => {
    setTodos(todos.map((todo: ITodoTypes) => {
      return todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo;
    }));
  }, [setTodos, todos]);

  const onDelete = useCallback((id: number) => {
    setTodos(todos.filter((todo: ITodoTypes) => todo.id !== id));
  }, [setTodos, todos]);

  return (
    <TodoListContainer>
      {todos.length > 0 ? todos.map((todo: ITodoTypes) => {
        const { id, contents, isCompleted } = todo;

        return (
          <TodoItem 
            key={id}
            id={id}
            contents={contents}
            isCompleted={isCompleted}
            onComplete={onComplete}
            onDelete={onDelete}
            todos={todos}
            setTodos={setTodos}
          />
        )
      }) : 
        <div className="todoList-noList">Todo가 없습니다. 자유롭게 추가해보세요!</div>
      }
    </TodoListContainer>
  )
}

const TodoListContainer = styled.div`
  width: 500px;
  height: 500px;
  max-height: 500px;
  position: relative;
  border: 2px solid var(--white);
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 1.5rem;
  overflow-x: hidden;
  overflow-y: auto;
  .todoList-noList{
    width: 100%;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;