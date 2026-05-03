import Header from "./Header";
import Footer from "./Footer";
import SearchArea from "./SearchArea";
import BookArea from "./BookArea";
import type { Book } from "../types/Book";
import { useEffect, useState } from "react";
import BookContext from "../contexts/BookContext";
import useFetch from "../hooks/useFetch";
import config from "../config.json";
import { PaginationContext } from "../contexts/PaginationContext";
import SearchContext from "../contexts/SearchContext";
import useSearch from "../hooks/useSearch";
import usePagination from "../hooks/usePagination";

export default function BookFinderPrac() {
  const search = useSearch();
  const page = usePagination();
  const endPoint = config.BOOK_SEARCH;
  const {documents, endPage, isLoading, error} = useFetch(search.query, page.pageNum, endPoint);
  
  const [selectedbook, setSelected] = useState<Book | null>(null);

  const selectBook = (book: Book | null) => {
    setSelected(book);
  };

  useEffect(() => {
    page.setEndPage(endPage);
  }, [endPage])


  return (
    <SearchContext.Provider value={search}>
      <BookContext.Provider value={{ books: documents, selectedbook, selectBook, isLoading, error }}>
        <PaginationContext.Provider value={page}>
      <Header books={documents}/>
      <div>
          <SearchArea />
          <BookArea />
          </div>
        </PaginationContext.Provider>
      </BookContext.Provider>
      {/* <Footer /> */}
    </SearchContext.Provider>
  );
}
