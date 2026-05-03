import "./css/BookList1.css";
import BookList from "./BookList";
import BookDetail from './BookDetail'

export default function BookArea() {
  return (
    <div className="book-area">
      <BookList />
      <BookDetail />
    </div>
  );
}
