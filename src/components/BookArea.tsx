import BookDetail from "./BookDetail";
import BookList from "./BookList";
import "./css/BookList.css";

export default function BookArea() {
  return (
    <div className="book-area">
      <BookList />
      <BookDetail />
    </div>
  );
}
