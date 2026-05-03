import { useState } from "react";

export default function usePagination() {
  const [pageNum, setPageNum] = useState<number>(1);
  const [endPage, setEndPage] = useState<boolean>(false);

  const nextPage = () => {
    if (!endPage) {
      setPageNum((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (pageNum === 1) return;
    setPageNum((prev) => prev - 1);
  };

  const resetPage = () => {
    setPageNum(1);
  };

  return { pageNum, endPage, setEndPage, nextPage, prevPage, resetPage };
}
