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
  box-shadow: 0.1rem 0.1rem 0.5rem black;
`;
