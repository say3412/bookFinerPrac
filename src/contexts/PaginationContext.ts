import { createContext } from "react";

export type PaginationContextType = {
  pageNum: number;
  endPage: boolean;
  prevPage: () => void;
  nextPage: () => void;
  resetPage: () => void;
};

export const PaginationContext = createContext<PaginationContextType | null>(null);
PaginationContext.displayName = "PaginationContext";
