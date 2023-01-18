import { useState } from "react";
import * as S from "./layout.styles";
import Link from "next/link";

function Layout({ children }) {
  return (
    <S.Container>
      <S.SideBar>
        <S.NavItems>
          <Link className='nav-items' href='/'>
            Inicio
          </Link>

          <Link className='nav-items' href='/additiona-content'>
            Mangás
          </Link>

          <Link className='nav-items' href='about'>
            Sobre
          </Link>
        </S.NavItems>
      </S.SideBar>
      <S.ContentArea>{children}</S.ContentArea>
    </S.Container>
  );
}

export default Layout;
