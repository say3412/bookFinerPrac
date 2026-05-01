import type { Book } from "../types/Book";
import "./css/SearchArea1.css";
import SearchBar from "./SearchBar";

interface SearchProp {
  resetPage: () => void;
  chageQuery: (q: string) => void;
  books: Book[];
}

export default function SearchArea({resetPage, chageQuery, books}: SearchProp) {
  return (
    <div className="search-area">
      {books && books.length > 0 && <div className="left-top">🍓 Berry Book Club 📚</div>}
      <SearchBar resetPage={resetPage} chageQuery={chageQuery}/>
      <div className="right-top"></div>
    </div>
  );
}
