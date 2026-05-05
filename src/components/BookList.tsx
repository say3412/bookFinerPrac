import useBookContext from "../hooks/useBookContext";
import BookItem from "./BookItem";
import "./css/BookList.css";
import Pagination from "./Pagination";

export default function BookList() {
  const { books } = useBookContext();

  return (
    <>
      {books.length > 0 && (
        <div className="book-list">
          {books.map((book) => (
            <BookItem key={book.isbn} book={book} />
          ))}
          <Pagination />
        </div>
      )}
    </>
  );
}
