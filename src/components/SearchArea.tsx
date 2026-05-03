import useBookContext from "../hooks/useBookContext";
import useSearchContext from "../hooks/useSearchContext";
import "./css/SearchArea1.css";
import SearchBar from "./SearchBar";

export default function SearchArea() {
  const {books, selectBook} = useBookContext();
  const {changeQuery} = useSearchContext();

  const resetToIntro = () => {
    changeQuery("");
    selectBook(null);
  };

  return (
    <div className="search-area">
      {books && books.length > 0 && (
        <div className="left-top" onClick={resetToIntro}>
          🍓 Berry Book Club 📚
        </div>
      )}
      <SearchBar />
      <div className="right-top"></div>
    </div>
  );
}
