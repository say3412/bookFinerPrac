import { useState } from "react";


export default function usePagination() {
  const [pageNum, setPageNem] = useState<number>(1);
  const [isEndPage, setIsEndPage] = useState<boolean>(false);

  const setEndPage = (b: boolean) => {
    setIsEndPage(b);
  }

  const goPrevPage = () => {
    if (pageNum > 1)
    setPageNem((prev) => prev - 1);
  };

  const goNextPage = () => {
    if (isEndPage) return;
    setPageNem((prev) => prev + 1); 
  }
  
  const resetPage = () => {
    setPageNem(1);
  }

  return {pageNum, isEndPage, setEndPage, goPrevPage, goNextPage, resetPage};
}