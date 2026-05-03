import { useContext } from "react";
import SearchContex from "../contexts/SearchContext";

export default function useSearchContext() {
  const context = useContext(SearchContex);
  if (!context) {
    throw new Error("SearchContext Provider is null");
  }

  return context;
}
