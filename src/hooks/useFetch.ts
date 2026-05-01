import type { Book, Meta } from "../types/Book";
import { useEffect, useState } from "react";
import config from "../config.json";

export default function useFetch<T>(query: string, pageNum:number, endPoint:string) {
  const [documents, setDocuments] = useState<Book[]>([]);
  const [endPage, setEngPage] = useState<boolean>(false);

  useEffect(() => {
    const fetchBooks = async () => {
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
        const books: Book[] = metaData.documents;

        setDocuments(books);
        setEngPage(metaData.meta.is_end);
      } catch (e) {
        alert(e);
      }
    };

    fetchBooks();
  }, [query]);

  return {documents, endPage}
}
