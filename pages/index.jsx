import React from "react";
import { useState, useEffect } from "react";

import Layout from "../components/layout/layout";
import * as S from "../styles/home";
import queryString from "query-string";

export default function Home() {
  const [info, setInfo] = useState({});

  const api = "https://kitsu.io/api/edge/";
  const limit = 16;

  useEffect(() => {
    setInfo({});

    fetch(`${api}anime?page[limit]=${limit}`)
      .then((response) => response.json())
      .then((response) => {
        setInfo(response);
      });
  }, []);

  return (
    <Layout>
      <S.Container>
        <S.ContentBox>
          {info.data && (
            <S.List className='animes-list'>
              {info.data.map((anime) => (
                <S.ListItem key={anime.id}>
                  <S.PreviewImage
                    src={anime.attributes.posterImage.small}
                    alt={anime.attributes.canonicalTitle}
                  />
                  {anime.attributes.canonicalTitle}
                </S.ListItem>
              ))}
            </S.List>
          )}
        </S.ContentBox>
      </S.Container>
    </Layout>
  );
}
