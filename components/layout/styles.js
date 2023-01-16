import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const SideBar = styled.div`
  font-align: right;
  height: 100%;
  width: 30vw;
  max-width: 14rem;
  background-color: red;
  position: fixed;
`;

export const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: auto;
  margin-left: 14rem;
`;
