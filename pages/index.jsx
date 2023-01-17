import React, { useState, useEffect, useMemo } from "react";
import Layout from "../components/layout/layout";
import * as S from "../styles/home";
import Pagination from "../components/pagination/pagination";
import queryString from "query-string";

export default function Home() {
  const [info, setInfo] = useState({});
  const [offset, setOffset] = useState(0);

  const api = "https://kitsu.io/api/edge/";
  const LIMIT = 16;

  useEffect(() => {
    setInfo({});

    fetch(`${api}anime?page[limit]=${LIMIT}&page[offset]=${offset}`)
      .then((response) => response.json())
      .then((response) => {
        setInfo(response);
      });
  }, [offset]);

  // const currentPageData = useMemo(() => {
  //   const firstPageindex = (currentPage - 1) * PageSize;
  //   const lastPageIndex = firstPageIndex + pageSize;

  //   return info.slice(firstPageindex, lastPageIndex);
  // }, [currentPage]);

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
