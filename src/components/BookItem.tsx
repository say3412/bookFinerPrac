export default function BookItem() {
  return (
    <div className="book-item">
      <img
        src="https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791187142560.jpg"
        alt="책 제목"
      />
      <div className="book-info">
        <h3>title</h3>
        <p>authors | publisher</p>
      </div>
    </div>
  );
}
