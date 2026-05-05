import usePaginationContext from "../hooks/usePaginationContext";
import "./css/Pagination.css";

export default function Pagination() {
  const { pageNum, isEndPage ,goPrevPage, goNextPage } = usePaginationContext();
  return (
    <div className="pagination">
      <button onClick={goPrevPage} disabled={pageNum === 1}>이전</button>
      <span>{pageNum}</span>
      <button onClick={goNextPage} disabled={isEndPage}>다음</button>
    </div>
  );
}
