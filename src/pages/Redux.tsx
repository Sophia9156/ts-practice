import React from "react";
import styled from "styled-components";
import Counter from 'components/redux-practice/Counter';
import Greetings from 'components/redux-practice/Greetings';
import MyForm from 'components/redux-practice/MyForm';
import ReducerSample from 'components/redux-practice/ReducerSample';
import { SampleProvider } from 'context/SampleContext';

export default function Redux() {
  const handleClick = (name: string) => {
    console.log(`Hello, ${name}!`);
  };

  const onSubmit = (form: {name: string; description: string;}) => {
    console.log(form);
  };

  return (
    <main>
      <Session1Container>
        <Greetings name="Sophia" onClick={handleClick} />
        <Counter />
        <MyForm onSubmit={onSubmit} />
        <SampleProvider>
          <ReducerSample />
        </SampleProvider>
      </Session1Container>
    </main>
  )
}

const Session1Container = styled.main`
  text-align: center;
  button{
    padding: 13px 16px;
    background-color: #ddd;
    border-radius: 8px;
  }
`;