import React, { useState, useEffect, useMemo } from "react";
import Layout from "../components/layout/layout";
import * as S from "../styles/about";

export default function About() {
  return (
    <Layout>
      <S.Container>
        <h1>Sobre o site</h1>
        <p>aplicação desenvolvida para testar os conhecimentos do candidato</p>
      </S.Container>
    </Layout>
  );
}
