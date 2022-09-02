import React from "react";
import styled from "styled-components";
import Counter from 'components/session1/Counter';
import Greetings from 'components/session1/Greetings';
import MyForm from 'components/session1/MyForm';
import ReducerSample from 'components/session1/ReducerSample';
import { SampleProvider } from 'context/SampleContext';

export default function Session1() {
  const handleClick = (name: string) => {
    console.log(`Hello, ${name}!`);
  };

  const onSubmit = (form: {name: string; description: string;}) => {
    console.log(form);
  };

  return (
    <Session1Container>
      <Greetings name="Sophia" onClick={handleClick} />
      <Counter />
      <MyForm onSubmit={onSubmit} />
      <SampleProvider>
        <ReducerSample />
      </SampleProvider>
    </Session1Container>
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