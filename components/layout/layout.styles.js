import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const SideBar = styled.nav`
  height: 100%;
  width: 10rem;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #2a9d8f;
  overflow-x: hidden;
  padding-top: 1.25rem;
`;

export const ContentArea = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: auto;
  margin-left: 20vw;
`;

export const NavItems = styled.div`
  margin-left: 2rem;
  flex-direction: column;
  display: flex;
  gap: 0.75rem;

  .nav-items {
    color: snow;
    padding-bottom: 0.1rem;
    border-bottom: 0.15rem snow solid;
    display: inline;
    width: 40%;
  }

  button {
    width: 30%;
    border-radius: 5rem;
    border: none;
    margin-left: 3rem;
    scale: 1.1;
  }
`;
