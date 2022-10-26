import useBearStore, { BearStoreTypes } from "modules/zustand/store";
import styled from "styled-components";


export default function Zustand() {
  const { bears, increasePopulation, removeAllBears } = useBearStore<BearStoreTypes>(state => state);

  return (
    <Container>
      <h1>Bears Population: {bears}</h1>
      <ul className="btn-list">
        <li className="btn-item">
          <button
            onClick={() => increasePopulation(1000)}
          >increase 1000+</button>
        </li>
        <li className="btn-item">
          <button
            onClick={removeAllBears}
          >reset</button>
        </li>
      </ul>
    </Container>
  )
}

const Container = styled.main`
  text-align: center;
  .btn-list{
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    .btn-item{
      button{
        padding: 12px 20px;
        border-radius: 8px;
      }
      margin-right: 20px;
      &:last-child{
        margin-right: 0;
      }
    }
  }
`;