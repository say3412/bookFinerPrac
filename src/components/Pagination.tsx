import "./css/Pagination1.css";
import usePaginationContext from "../hooks/usePaginationContext";

export default function Pagination() {
  const { pageNum, endPage, prevPage, nextPage } = usePaginationContext();
  
  return (
    <div>
      <button onClick={prevPage} disabled={pageNum === 1}>
        prev
      </button>
      <span>{pageNum}</span>
      <button onClick={nextPage} disabled={endPage}>
        next
      </button>
    </div>
  );
}
