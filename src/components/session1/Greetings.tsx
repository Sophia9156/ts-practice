import React from "react";

type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void;
}

export default function Greetings({name, mark, optional, onClick}: GreetingsProps) {
  const handleClick = () => onClick(name);

  return (
    <div>
      <h3>Hello, {name}{mark}</h3>
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click Me!</button>
      </div>
    </div>
  )
}

Greetings.defaultProps = {
  mark: '!',
}