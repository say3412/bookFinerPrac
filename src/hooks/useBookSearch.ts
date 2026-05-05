import { useEffect, useState } from "react";
import config from "../config.json";
import useFetch from "./useFetch";
import useSearch from "./useSearch";
import usePagination from "./usePagination";
import type { Book } from "../types/Book";

export default function useBookSearch() {
  const url = config.BOOK_SEARCH;
  const apiKey = config.KAKAOAPIKEY;

  // 1. 개별 상태 관리 (기존 useBook 로직 흡수)
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const search = useSearch();
  const pagination = usePagination();

  // 2. 데이터 패칭
  const { documents, endPage } = useFetch<Book>(
    url,
    search.query,
    pagination.pageNum,
    apiKey
  );

  // 3. Fetch된 데이터를 내부 상태로 동기화
  useEffect(() => {
    setBooks(documents);
    pagination.setEndPage(endPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [documents, endPage]);

  // 4. 검색어가 바뀌면 페이지를 1로 초기화
  useEffect(() => {
    if (search.query) {
      pagination.resetPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search.query]);

  return {
    search,
    pagination,
    bookCon: {
      books,
      setAllBooks: setBooks,
      selectedBook,
      selectBook: setSelectedBook,
    },
  };
}
