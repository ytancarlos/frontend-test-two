import react from "react";
import * as S from "./styles";

function Layout({ children }) {
  return (
    <S.Container>
      <S.SideBar />
      <S.ContentArea>{children}</S.ContentArea>
    </S.Container>
  );
}

export default Layout;
