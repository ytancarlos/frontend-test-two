import React, { useState, useEffect, useMemo } from "react";
import Layout from "../components/layout/layout";
import * as S from "../styles/home";
import Pagination from "../components/pagination/pagination";

export default function Home() {
  const [info, setInfo] = useState({});
  const [offset, setOffset] = useState(0);
  const [text, setText] = useState("");
  const LIMIT = 16;

  let api = `https://kitsu.io/api/edge/anime?page[limit]=${LIMIT}&page[offset]=${offset}`;

  useEffect(() => {
    setInfo({});

    if (text !== "") {
      api = `https://kitsu.io/api/edge/anime?filter[text]=${text}&page[limit]=${LIMIT}&page[offset]=${offset}`;
    }

    fetch(api)
      .then((response) => response.json())
      .then((response) => {
        setInfo(response);
      });
  }, [offset, text]);

  return (
    <Layout>
      <S.Container>
        <S.ContentBox>
          <input type='text' onChange={(e) => setText(e.target.value)} />

          {info.data && (
            <S.List className='animes-list'>
              {console.log(text)}
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
          {info.meta && (
            <Pagination
              limit={LIMIT}
              totalCount={info.meta.count}
              offset={offset}
              setOffset={setOffset}
            />
          )}
        </S.ContentBox>
      </S.Container>
    </Layout>
  );
}
