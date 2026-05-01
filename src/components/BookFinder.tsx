import Header from "./Header";
import Footer from "./Footer";
import SearchArea from "./SearchArea";
import BookArea from "./BookArea";
import type { Book } from "../types/Book";
import { useState } from "react";
import BookContext from "../contexts/BookContext";
import useFetch from "../hooks/useFetch";

export default function BookFinderPrac() {
  const [query, setQuery] = useState<string>("");
  const [pageNum, setPageNum] = useState<number>(1);
  const endPoint = "https://dapi.kakao.com/v3/search/book?";
  
  const {documents, endPage} = useFetch(query, pageNum, endPoint);
  const [selected, setSelected] = useState<Book | null>(null);

  const selectBook = (book: Book) => {
    setSelected(book);
  };

  const chageQuery = (q: string) => {
    setQuery(q);
  };

  const nextPageNum = () => {
    setPageNum((prev) => prev + 1);
  };

  const prevPageNum = () => {
    setPageNum((prev) => prev - 1);
  };

  const resetPage = () => {
    setPageNum(1);
  };

  return (
    <div className="">
      <Header books={documents}/>
      <BookContext.Provider value={{ selectBook }}>
        <div className="">
          <SearchArea chageQuery={chageQuery} resetPage={resetPage} books={documents}/>
          <BookArea books={documents} book={selected} pageNum={pageNum} endPage={endPage} nextPageNum={nextPageNum} prevPageNum={prevPageNum}/>
        </div>
      </BookContext.Provider>
      {/* <Footer /> */}
    </div>
  );
}
