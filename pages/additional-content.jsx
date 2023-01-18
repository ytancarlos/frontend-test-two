import React, { useState, useEffect, useMemo } from "react";
import Layout from "../components/layout/layout";
import * as S from "../styles/home";
import Pagination from "../components/pagination/pagination";

export default function additionalContent() {
  const [info, setInfo] = useState({});
  const [offset, setOffset] = useState(0);
  const [text, setText] = useState("");
  const LIMIT = 16;

  let api = `https://kitsu.io/api/edge/manga?page[limit]=${LIMIT}&page[offset]=${offset}`;

  useEffect(() => {
    setInfo({});

    if (text !== "") {
      api = `https://kitsu.io/api/edge/manga?filter[text]=${text}&page[limit]=${LIMIT}&page[offset]=${offset}`;
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
          <S.Header>
            <input
              type='text'
              onChange={(e) => setText(e.target.value)}
              placeholder='Faça sua busca aqui'
            />
          </S.Header>

          {info.data && (
            <S.List className='animes-list'>
              {console.log(text)}
              {info.data.map((manga) => (
                <S.ListItem key={manga.id}>
                  <S.PreviewImage
                    src={manga.attributes.posterImage.small}
                    alt={manga.attributes.canonicalTitle}
                  />
                  {manga.attributes.canonicalTitle}
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
