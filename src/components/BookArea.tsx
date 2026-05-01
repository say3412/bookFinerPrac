import "./css/BookList1.css";
import BookList from "./BookList";
import BookDetail from './BookDetail'
import type { Book } from "../types/Book";

interface BookProps {
  books: Book[];
  book: Book | null;
  pageNum: number;
  endPage: boolean;
  prevPageNum: () => void;
  nextPageNum: () => void;
}

export default function BookArea({books, book, pageNum, endPage, prevPageNum, nextPageNum}: BookProps) {
  return (
    <div className="book-area">
      <BookList books={books} pageNum={pageNum} endPage={endPage} prevPageNum={prevPageNum} nextPageNum={nextPageNum}/>
      <BookDetail book={book} />
    </div>
  );
}
