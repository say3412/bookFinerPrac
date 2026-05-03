import usePaginationContext from '../hooks/usePaginationContext';
import './css/Pagination1.css'

export default function Pagination() {
  const {pageNum, isEndPage, prevPageNum, nextPageNum} = usePaginationContext();

  return (
    <div>
      <button onClick={prevPageNum} disabled={pageNum === 1}>prev</button>
      <span>{pageNum}</span>
      <button onClick={nextPageNum} disabled={isEndPage}>next</button>
    </div>
  );
}
