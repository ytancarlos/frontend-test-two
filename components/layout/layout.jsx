import react from "react";
import * as S from "./styles";

function Layout({ children }) {
  return (
    <S.Container>
      <S.SideBar>
        <p>inicio</p>
        <p>gênero</p>
        <p>outros</p>
      </S.SideBar>
      <S.ContentArea>{children}</S.ContentArea>
    </S.Container>
  );
}

export default Layout;
