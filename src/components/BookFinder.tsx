import Header from "./Header";
import Footer from "./Footer";
import SearchArea from "./SearchArea";
import BookArea from "./BookArea";
import BookContext from "../contexts/BookContext";
import useFetch from "../hooks/useFetch";
import config from "../config.json";
import useSearch from "../hooks/useSearch";
import usePagination from "../hooks/usePagination";
import SearchContext from "../contexts/searchContext";
import PaginationContext from "../contexts/PaginationContext";
import { useState } from "react";
import type { Book } from "../types/Book";

export default function BookFinderPrac() {
  const endPoint = config.BOOK_SEARCH;
  const apiKey = config.KAKAOAPIKEY;

  const search = useSearch();
  const pagination = usePagination();
  const { documents, setDocuments } = useFetch(
    search.query,
    pagination.pageNum,
    endPoint,
    apiKey,
  );
  
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const selectBook = (book: Book | null) => {
    setSelectedBook(book);
  }

  return (
    <div className="">
      <SearchContext.Provider value={search}>
        <BookContext.Provider
          value={{
            books: documents,
            setBooks: setDocuments,
            selectBook,
            selectedBook,
          }}
        >
          <Header />
          <PaginationContext.Provider value={pagination}>
            <SearchArea />
            <BookArea />
          </PaginationContext.Provider>
        </BookContext.Provider>
      </SearchContext.Provider>
      {/* <Footer /> */}
    </div>
  );
}
