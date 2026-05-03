import { useState } from "react";

export default function usePagination() {
  const [pageNum, setPageNum] = useState<number>(1);
  const [isEndPage, setIsEndPage] = useState<boolean>(false);

  const nextPageNum = () => {
    if(isEndPage) return;
    setPageNum((prev) => prev + 1);
  };

  const prevPageNum = () => {
    if(pageNum === 1) return;
    setPageNum((prev) => prev - 1);
  };

  const resetPage = () => {
    setPageNum(1);
  };

  return {
    pageNum,
    isEndPage,
    setIsEndPage,
    nextPageNum,
    prevPageNum,
    resetPage,
  };
}
