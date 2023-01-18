import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: grey;
  gap: 2rem;
`;

export const ContentBox = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  width: 100%;
  height: 10vh;
  min-height: 5.5rem;

  input {
    width: 50%;

    border-radius: 0.7rem;
    border: none;
    margin-left: 45%;
    margin-top: 1.4rem;

    padding: 0.8rem;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: center;
  margin: 2rem 0;
`;

export const ListItem = styled.li`
  width: 10rem;
  height: 100%;
  text-align: center;
`;

export const PreviewImage = styled.img`
  border-radius: 0.2rem;
  box-shadow: 0.05rem 0.05rem 0.15rem snow;
`;
