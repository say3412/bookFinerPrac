import BookArea from "./BookArea";
import Header from "./Header";
import SearchArea from "./SearchArea";
import config from "../config.json";
import useFetch from "../hooks/useFetch";
import type { Book } from "../types/Book";
import BookContext from "../contexts/BookContext";
import SearchContext from "../contexts/SearchContext";
import PaginationContext from "../contexts/PaginationContext";
import useSearch from "../hooks/useSearch";
import usePagination from "../hooks/usePagination";
import useBook from "../hooks/useBook";

export default function BookFinderPrac() {
  const url = config.BOOK_SEARCH;
  const apiKey = config.KAKAOAPIKEY;

  const search = useSearch();
  const pagination = usePagination();
  const bookCon = useBook();

  const { documents, endPage } = useFetch<Book>(
    url,
    search.query,
    pagination.pageNum,
    apiKey,
  );
  bookCon.setAllBooks(documents);
  pagination.setEndPage(endPage);


  return (
    <SearchContext.Provider value={search}>
      <BookContext.Provider value={bookCon}>
        <Header />
        <PaginationContext.Provider value={pagination}>
          <SearchArea />
          <BookArea />
        </PaginationContext.Provider>
      </BookContext.Provider>
    </SearchContext.Provider>
  );
}
