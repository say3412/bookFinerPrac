import './css/Pagination1.css'

interface PageProps {
  pageNum: number;
  endPage: boolean;
  prevPageNum: () => void;
  nextPageNum: () => void;
}

export default function Pagination({ pageNum, endPage, prevPageNum, nextPageNum }: PageProps) {
  const handerPrev = () => {
    if(pageNum === 1) return;
    prevPageNum();
  };

  const handerNext = () => {
    if(endPage) return;
    nextPageNum();
  };

  return (
    <div>
      <button onClick={handerPrev} disabled={pageNum === 1}>prev</button>
      <span>{pageNum}</span>
      <button onClick={handerNext} disabled={endPage}>next</button>
    </div>
  );
}
