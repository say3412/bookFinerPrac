import type { Book, Meta } from "../types/Book";
import { useEffect, useState } from "react";
import config from "../config.json";

export default function useFetch(query: string, pageNum:number, endPoint:string) {
  const [documents, setDocuments] = useState<Book[]>([]);
  const [endPage, setEndPage] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query) {
      setDocuments([]);
      setEndPage(false);
    }

    const fetchBooks = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const url = `${endPoint}page=${pageNum}&query=${query}`;
        const res = await fetch(url, {
          headers: {
            Authorization: config.KAKAOAPIKEY,
          },
        });

        if (!res.ok) {
          throw new Error("HTTP error: " + res.status);
        }

        const metaData: Meta = await res.json();
        setDocuments(metaData.documents);
        setEndPage(metaData.meta.is_end);
      } catch (e) {
        setError(e instanceof Error ? e.message : "알 수 없는 에러");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBooks();
  }, [query, pageNum]);

  return {documents, endPage, isLoading, error}
}
