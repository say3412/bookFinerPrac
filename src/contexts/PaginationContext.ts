import { createContext } from "react";

type PaginationContextType = {
    pageNum: number;
    isEndPage: boolean;
    nextPageNum: () => void;
    prevPageNum: () => void;
    resetPage: () => void;
}

const PaginationContext = createContext<PaginationContextType |  null>(null);
PaginationContext.displayName = 'PageContext';

export default PaginationContext;


