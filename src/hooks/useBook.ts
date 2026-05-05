import { useState } from "react";
import type { Book } from "../types/Book";

export default function useBook() {
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const setAllBooks = (allBooks: Book[]) => {
    setBooks(allBooks);
  }

  const selectBook = (book: Book) => {
    setSelectedBook(book);
  }

  return { books, setAllBooks, selectedBook, selectBook };
}