import { createContext } from "react";
import type { Book } from "../types/Book";

type BookContextType = {
  books: Book[];
  selectedBook: Book | null;
  selectBook: (book: Book) => void;
}

const BookContext = createContext<BookContextType | null>(null);
BookContext.displayName = 'BookContext';

export default BookContext;