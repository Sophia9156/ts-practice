import React, { useReducer, useState } from "react";

type Action = { type: 'INCREASE' } | { type: 'DECREASE' };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default: 
      throw new Error('Unhandled action');
  }
}

export default function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);
  // const [count, setCount] = useState<number>(0);

  const onIncrease = () => dispatch({ type: 'INCREASE' });
  const onDecrease = () => dispatch({ type: 'DECREASE' });
  // const onIncrease = () => setCount(prev => prev + 1);
  // const onDecrease = () => setCount(prev => prev - 1);

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+ 1</button>
        <button onClick={onDecrease}>- 1</button>
      </div>
    </div>
  )
}