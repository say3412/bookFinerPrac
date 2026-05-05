import { createContext } from "react";

export type PaginationContextType = {
  pageNum: number;
  isEndPage: boolean;
  setEndPage: (b: boolean) => void;
  goPrevPage: () => void;
  goNextPage: () => void;
  resetPage: () => void;
};

const PaginationContext = createContext<PaginationContextType | null>(null);
PaginationContext.displayName = "PaginationContext";

export default PaginationContext;
