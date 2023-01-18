import styled from "styled-components";

export const NavButton = styled.button`
  border-radius: 50%;
  border: none;
  padding: 0.3rem 0.5rem;
  box-shadow: 0.1rem 0.075rem 0.2rem black;
`;

export const NavBar = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  margin: 2rem 0;

  list-style: none;

  .active {
    background-color: #2a9d8f;
    opacity: 0.8;
    color: snow;
  }
`;
