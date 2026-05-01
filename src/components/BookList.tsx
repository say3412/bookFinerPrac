import "./css/BookList1.css";
import BookItem from "./BookItem";
import type { Book } from "../types/Book";
import Pagination from "./Pagination";

interface ListProps {
  books: Book[];
  pageNum: number;
  endPage: boolean;
  prevPageNum: () => void;
  nextPageNum: () => void;
}

export default function BookList({
  books,
  pageNum,
  endPage,
  prevPageNum,
  nextPageNum,
}: ListProps) {
  return (
    <div className="book-list1">
      {books.map((book) => (
        <BookItem key={book.isbn} book={book} />
      ))}
      <div className="pagination">
        {books && books.length > 0 && (<Pagination
          pageNum={pageNum}
          endPage={endPage}
          prevPageNum={prevPageNum}
          nextPageNum={nextPageNum}
        />)}
      </div>
    </div>
  );
}
