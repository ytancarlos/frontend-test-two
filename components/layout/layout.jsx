import react, { useEffect, useState } from "react";
import * as S from "./layout.styles";
import CategoriesContext from "../../contexts/categoriesContext";
import Link from "next/link";

function Layout({ children }) {
  return (
    <S.Container>
      <S.SideBar>
        <div>
          <button>inicio</button>
        </div>
      </S.SideBar>
      <S.ContentArea>{children}</S.ContentArea>
    </S.Container>
  );
}

export default Layout;
