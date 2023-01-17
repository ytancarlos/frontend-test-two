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
  background-color: #111;
  overflow-x: hidden;
  padding-top: 1.25rem;
`;

export const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: auto;
  margin-left: 20vw;
`;
