import React, { ChangeEvent, useCallback } from "react";
import styled from "styled-components";
import { FaPen } from "react-icons/fa";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { inputState, ITodoTypes, todosState } from "recoil/todos";

export default function TodoInput() {
  const [contents, setContents] = useRecoilState<string>(inputState);

  const todos = useRecoilValue<ITodoTypes[]>(todosState);
  const setTodos = useSetRecoilState<ITodoTypes[]>(todosState);
  // useRecoilValue = get 변수
  // useSetRecoilState = setter 지정
  // 위와 같은 형식으로 get과 setter를 분리하여 사용하는 방법도 있음

  const addTodo = useCallback((): void => {
    if(!contents.trim()) {
      // 빈칸 입력 방지
      return;
    }

    const nextId: number = todos.length > 0 ? todos[todos.length - 1].id + 1 : 0;
    // 배열에 값이 존재할 시, 고유값은 마지막 인덱스에 위치한 id 값에서 1을 늘려줘서 고유값 생성.
    // 만약 값이 존재하지 않을 시 초기값은 0

    const todo: ITodoTypes = {
      id: nextId,
      contents,
      isCompleted: false,
    };

    setTodos([...todos, todo]);
    // 기존 객체들 복사 및 새로운 객체 추가

    setContents('');
  }, [contents, setContents, setTodos, todos]);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setContents(value);
  }, [setContents]);

  const onKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>): void => {
    if(e.key === 'Enter') {
      addTodo();
      return;
    }
  }, [addTodo]);

  return (
    <TodoInputContainer>
      <input
        type="text"
        className="todoInput-input"
        placeholder="Todo를 입력해보세요!"
        value={contents}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <FaPen className="todoInput-button" onClick={addTodo} />
    </TodoInputContainer>
  )
}

const TodoInputContainer = styled.div`
  width: 100%;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid var(--white);
  padding: 0 4px;
  .todoInput-input{
    flex: 1;
    outline: none;
    border: none;
    color: var(--white);
    background-color: var(--main);
    padding: 5px 2px;
    font-size: 1.2rem;

    &::placeholder {
        color: var(--white);
    }
  }
  .todoInput-button {
    color: var(--white);
    font-size: 1.4rem;
    cursor: pointer;
  }
`;