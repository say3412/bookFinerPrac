import { useState, type ChangeEvent } from "react";
import "./css/SearchBar1.css";
import useSearchContext from "../hooks/useSearchContext";
import usePaginationContext from "../hooks/usePaginationContext";

export default function SearchBar() {
  const [inputCon, setInputCon] = useState<string>('');
  const {changeQuery} = useSearchContext();
  const {resetPage} = usePaginationContext();


  const handelChageQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setInputCon(e.target.value)
  }

  const handelClick = () => {
    changeQuery(inputCon);
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
