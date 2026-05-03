import "./css/SearchArea1.css";
import SearchBar from "./SearchBar";
import useBookContext from "../hooks/useBookContext";

export default function SearchArea() {
  const { books, setBooks, selectBook } = useBookContext();

  const clearPage = () => {
    setBooks([]);
    selectBook(null); 
  }

  return (
    <div className="search-area">
      {books.length > 0 && (
        <div className="left-top" onClick={() => clearPage()}>🍓 Berry Book Club 📚</div>
      )}
      <SearchBar />
      <div className="right-top"></div>
    </div>
  );
}
