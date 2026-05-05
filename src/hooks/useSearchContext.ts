import { useContext } from "react";
import SearchContext from "../contexts/SearchContext";

export default function useSearchContext() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("SearchContext Provider is null.");
  }

  return context;
}
