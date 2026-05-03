import { useContext } from "react";
import type { Book } from "../types/Book";
import "./css/SearchArea1.css";
import SearchBar from "./SearchBar";
import BookContext from "../contexts/BookContext";
import usePaginationContext from "../hooks/usePaginationContext";
import useSearchContext from "../hooks/useSearchContext";
import useBookContext from "../hooks/useBookContext";

interface SearchProp {
  resetPage: () => void;
  chageQuery: (q: string) => void;
  books: Book[];
}

export default function SearchArea() {
  const { books } = useBookContext();

  return (
    <div className="search-area">
      {books.length > 0 && (
        <div className="left-top">🍓 Berry Book Club 📚</div>
      )}
      <SearchBar />
      <div className="right-top"></div>
    </div>
  );
}
