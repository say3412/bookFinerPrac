import "./css/BookList1.css";
import BookItem from "./BookItem";
import Pagination from "./Pagination";
import useBookContext from "../hooks/useBookContext";

export default function BookList() {
  const { books } = useBookContext();

  if (!books) {
    throw new Error("No BookContext Provider.");
  }

  return (
    <div className="book-list1">
      {books.map((book) => (
        <BookItem key={book.isbn} book={book} />
      ))}
      <div className="pagination">{books.length > 0 && <Pagination />}</div>
    </div>
  );
}
