import { useState, type ChangeEvent } from "react";
import "./css/SearchBar1.css";

interface BarProps {
  resetPage: () => void;
  chageQuery: (q: string) => void;
}

export default function SearchBar({resetPage, chageQuery}: BarProps) {
  const [inputCon, setInputCon] = useState<string>('');

  const handelChageQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setInputCon(e.target.value)
  }

  const handelClick = () => {
    chageQuery(inputCon);
    setInputCon('');
    resetPage();
  }

  return (
    <div className="search-bar">
      <input type="text" placeholder="what is in your mind?" onChange={handelChageQuery} value={inputCon}/>
      <button onClick={handelClick}>🔍</button>
    </div>
  );
}
