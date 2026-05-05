import { useState, type ChangeEvent } from "react";
import useSearchContext from "../hooks/useSearchContext";
import "./css/SearchBar.css";

export default function SearchBar() {
  const {query, setQuery} = useSearchContext();

  const [inputQuery, setInputQuery] = useState<string>('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputQuery(e.target.value);
  }

  const handleClick = () => {
    if (!inputQuery) return;
    setQuery(inputQuery);
  }

  return (
    <div className="search-bar">
      <input type="text" placeholder="어떤 책을 마음에 품고 계세요?" onChange={handleInput} value={inputQuery}/>
      <button onClick={handleClick}>🔍</button>
    </div>
  );
}
