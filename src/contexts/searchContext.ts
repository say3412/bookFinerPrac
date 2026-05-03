import { createContext } from "react";

type SearchContextType = {
  query: string;
  changeQuery: (q: string) => void;
}

const SearchContext = createContext<SearchContextType | null>(null);
SearchContext.displayName = 'SearchContext';

export default SearchContext;