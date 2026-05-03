import { useContext } from "react";
import SearchContext from "../contexts/searchContext";

export default function useSearchContext() {
  const contexts = useContext(SearchContext);

  if (!contexts) {
    throw new Error("No SearchContext Provider.");
  }

  return contexts;
}
