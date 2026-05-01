import { useContext } from "react";
import type { Book } from "../types/Book";
import BookContext from "../contexts/BookContext";

interface ItemProps {
  book: Book;
}

export default function BookItem({book}: ItemProps) {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("BookContext Provider가 없습니다");
  }

  const {selectBook} = context;

  return (
    <div className="book-item" onClick={() => selectBook(book)}>
      <img
        src={book.thumbnail}
        alt={book.title}
      />
      <div className="book-info">
        <h3>{book.title}</h3>
        <p>{book.authors.join(', ')} | {book.publisher}</p>
      </div>
    </div>
  );
}
