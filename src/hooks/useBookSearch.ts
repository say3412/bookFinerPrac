import config from "../config.json";
import useFetch from "../hooks/useFetch";
import type { Book } from "../types/Book";
import useSearch from "../hooks/useSearch";
import usePagination from "../hooks/usePagination";
import { useEffect, useState } from "react";

export default function useBookSearch() {
  const url = config.BOOK_SEARCH;
  const apiKey = config.KAKAOAPIKEY;

  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, selectBook] = useState<Book | null>(null);

  const search = useSearch();
  const pagination = usePagination();

  const { documents, endPage } = useFetch<Book>(
    url,
    search.query,
    pagination.pageNum,
    apiKey,
  );

  useEffect(() => {
    setBooks(documents);
    pagination.setEndPage(endPage);
  }, [documents, endPage]);

  useEffect(() => {
    pagination.resetPage();
    selectBook(null);
  }, [search.query]);

  return {
    bookCon: { books, setBooks, selectedBook, selectBook },
    search,
    pagination,
  };
}
