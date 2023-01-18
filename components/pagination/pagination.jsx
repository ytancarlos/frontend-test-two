import React from "react";
import * as S from "./pagination.styles";

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const Pagination = ({ limit, totalCount, offset, setOffset }) => {
  const currentPage = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(totalCount / limit);
  const first = Math.max(currentPage - MAX_LEFT, 1);

  function onPageChange(page) {
    setOffset((page - 1) * limit);
  }

  return (
    <S.NavBar className='pagination'>
      <li>
        <S.NavButton
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}>
          {"<"}
        </S.NavButton>
      </li>
      {Array.from({ length: Math.min(MAX_ITEMS, pages) })
        .map((_, index) => index + first)
        .map((page) => (
          <li key={page}>
            <S.NavButton
              className={page === currentPage ? "active" : null}
              onClick={() => onPageChange(page)}>
              {page}
            </S.NavButton>
          </li>
        ))}
      <li>
        <S.NavButton
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === pages}>
          {">"}
        </S.NavButton>
      </li>
    </S.NavBar>
  );
};

export default Pagination;
