import { useEffect, useState } from "react";
import usePaginationContext from "./usePaginationContext";
import type { Meta } from "../types/Book";

export default function useFetch<T>(
  endPoint: string,
  query: string,
  pageNum: number,
  apiKey: string,
) {
  const [documents, setDocuments] = useState<T[]>([]);
  const [endPage, setEndPage] = useState<boolean>(false);

  useEffect(() => {
    if (!query) {
      setDocuments([]);
    }

    const fetchDocuments = async () => {
      try {
        const response = await fetch(
          `${endPoint}page=${pageNum}&query=${query}`,
          { headers: { Authorization: apiKey } },
        );
        if (!response.ok) {
          throw new Error("HTTP Error Status:" + response.status);
        }

        const metaData: Meta<T> = await response.json();

        setDocuments(metaData.documents);
        setEndPage(metaData.meta.is_end);

        return {};
      } catch (error) {
        alert(error);
      }
    };

    fetchDocuments();
  }, [query, pageNum]);

  return { documents, endPage };
}
