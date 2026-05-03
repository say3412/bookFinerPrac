import type { Book, Meta } from "../types/Book";
import { useEffect, useState } from "react";
import usePagination from "./usePagination";

export default function useFetch(
  query: string,
  pageNum: number,
  endPoint: string,
  apiKey: string,
) {
  const [documents, setDocuments] = useState<Book[]>([]);
  const pagination = usePagination();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const url = `${endPoint}page=${pageNum}&query=${query}`;
        const res = await fetch(url, {
          headers: {
            Authorization: apiKey,
          },
        });

        if (!res.ok) {
          throw new Error("HTTP error: " + res.status);
        }

        const metaData: Meta = await res.json();

        setDocuments(metaData.documents);
        pagination.setIsEndPage(metaData.meta.is_end);
      } catch (e) {
        alert(e);
      }
    };

    fetchBooks();
  }, [query, pageNum]);

  return { documents };
}
