import useBookContext from "../hooks/useBookContext";
import "./css/SearchArea.css";
import SearchBar from "./SearchBar";

export default function SearchArea() {
  const {books, setBooks, selectBook} = useBookContext();
  const handleClick = () => {
    setBooks([]);
    selectBook(null);
  }

  return (
    <div className="search-area">
      {books.length > 0 && <div className="left-top" onClick={handleClick}>🍓 Berry Book Club 📚</div>}
      <SearchBar />
    </div>
  );
}
