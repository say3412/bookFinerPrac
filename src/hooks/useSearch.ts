import { useState } from "react";

export default function useSearch() {
  const [query, setQuery] = useState<string>("");

  return {query, setQuery}
}