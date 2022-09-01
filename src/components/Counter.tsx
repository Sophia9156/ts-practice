import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);
  const onIncrease = () => setCount(prev => prev + 1);
  const onDecrease = () => setCount(prev => prev - 1);

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