import "./css/BookList1.css";
import BookList from "./BookList";
import BookDetail from './BookDetail'
import useBookContext from "../hooks/useBookContext";

export default function BookArea() {
  const {books: books} = useBookContext();

  return (
    <div className="book-area">
      <BookList />
      {books && books.length > 0 && <BookDetail />}
    </div>
  );
}
