import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

export default function Header() {
  return (
    <StyledHeader>
      <nav>
        <ul>
          <li>
            <Link to='/redux'>
              <span>Redux</span>
            </Link>
          </li>
          <li>
            <Link to='/recoil-test'>
              <span>Recoil Test</span>
            </Link>
          </li>
          <li>
            <Link to='/recoil-test2'>
              <span>Recoil Test2</span>
            </Link>
          </li>
          <li>
            <Link to='/zustand'>
              <span>Zustand</span>
            </Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  padding: 36px 0;
  nav {
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        font-size: 1.2rem;
        margin: 0 36px;
      }
    }
  }
`;