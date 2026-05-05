import { createContext } from 'react';
import type {Book} from '../types/Book'

type BookContextType= {
    books: Book[];
    setBooks: (books: Book[]) => void;
    selectedBook: Book | null;
    selectBook: (book: Book | null) => void;
}

const BookContext = createContext<BookContextType | null>(null);
BookContext.displayName = 'BookContext'

export default BookContext;