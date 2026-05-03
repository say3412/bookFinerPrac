import Header from "./Header";
import Footer from "./Footer";
import SearchArea from "./SearchArea";
import BookArea from "./BookArea";
import type { Book } from "../types/Book";
import { useState } from "react";
import BookContext from "../contexts/BookContext";
import useFetch from "../hooks/useFetch";
import config from "../config.json"
import useSearch from "../hooks/useSearch";
import usePagination from "../hooks/usePagination";
import SearchContext from "../contexts/searchContext";
import PaginationContext from "../contexts/PaginationContext";

export default function BookFinderPrac() {
  const endPoint = config.BOOK_SEARCH;
  const apiKey = config.KAKAOAPIKEY;

  const search = useSearch();
  const pagination = usePagination();
  
  const {documents} = useFetch(search.query, pagination.pageNum, endPoint, apiKey);
  const [selectedBook, setSelected] = useState<Book | null>(null);
  
  const selectBook = (book: Book) => {
    setSelected(book);
  };

  return (
    <div className="">
      <BookContext.Provider value={{ books: documents, selectedBook, selectBook }}>
        <SearchContext.Provider value={search}>
        <Header />
        <PaginationContext.Provider value={pagination}>
          <SearchArea />
          <BookArea />
        </PaginationContext.Provider>
        </SearchContext.Provider>
      </BookContext.Provider>
      {/* <Footer /> */}
    </div>
  );
}