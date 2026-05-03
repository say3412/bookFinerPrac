import { useState, type ChangeEvent } from "react";
import "./css/SearchBar1.css";
import usePaginationContext from "../hooks/usePaginationContext";
import useSearchContext from "../hooks/useSearchContext";

export default function SearchBar() {
  const [inputCon, setInputCon] = useState<string>("");
  const pagination = usePaginationContext();
  const search = useSearchContext();

  const handelChageQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setInputCon(e.target.value);
  };

  const handelClick = () => {
    search.changeQuery(inputCon);
    setInputCon("");
    pagination.resetPage();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.code === "Enter") {
      handelClick();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="which book is in your mind?"
        onChange={handelChageQuery}
        onKeyDown={handleKeyDown}
        value={inputCon}
      />
      <button onClick={handelClick}>🔍</button>
    </div>
  );
}
