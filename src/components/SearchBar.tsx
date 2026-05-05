import { useState, type ChangeEvent } from "react";
import useSearchContext from "../hooks/useSearchContext";
import "./css/SearchBar.css";

export default function SearchBar() {
  const { setQuery } = useSearchContext();

  const [inputQuery, setInputQuery] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputQuery(e.target.value);
  };

  const handleClick = () => {
    if (!inputQuery.trim()) return;
    setQuery(inputQuery);
    setInputQuery("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if(e.nativeEvent.isComposing) return;
    if(e.code === 'Enter') {
      handleClick();
    }
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="어떤 책을 마음에 품고 계세요?"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={inputQuery}
      />
      <button onClick={handleClick}>🔍</button>
    </div>
  );
}
