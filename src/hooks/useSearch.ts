import { useState } from "react";

export default function useSearch() {
  const [query, setQuery] = useState<string>("");
  const changeQuery = (q: string) => {
    setQuery(q);
  };

  return {query, changeQuery};
}
