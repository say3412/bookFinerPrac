import { createContext } from "react";
import type { Book } from "../types/Book";

export type BookContextType = {
  books: Book[];
  selectedbook: Book | null;
  selectBook: (book: Book | null) => void;
  isLoading: boolean;
  error: string | null;
}

const BookContext = createContext<BookContextType | null>(null);
BookContext.displayName = 'BookContext';

export default BookContext;