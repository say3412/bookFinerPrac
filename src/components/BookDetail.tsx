import "./css/BookDetail.css";
import useBookContext from "../hooks/useBookContext";

export default function BookDetail() {
  const { selectedBook: book } = useBookContext();

  if (!book) {
    return <div className="no-book"></div>;
  }

  return (
    <div className="book-detail">
      <h2>{book.title}</h2>
      <div className="header">
        <div className="header-img">
          <a href={book.url} target="_blank">
            <img src={book.thumbnail} />
          </a>
        </div>
        <div className="header-des">
          <p>
            <span>
              <strong>저자:</strong>&nbsp; {book.authors.join(", ")}
            </span>
            <span>
              <strong>출판:</strong>&nbsp; {book.publisher}
            </span>
            <span>
              <strong>출판일:</strong>&nbsp; {book.datetime.split("T")[0]}
            </span>
            <span>
              <strong>ISBN:</strong>&nbsp; {book.isbn}
            </span>
            <br />
            <span>
              <strong>가격:&nbsp; {book.sale_price}</strong>&nbsp;(정가:{book.price})
            </span>
            <span className="click-details">
              <a href={book.url} target="_blank">
                상세내용 바로 가기
              </a>
            </span>
          </p>
        </div>
      </div>
      <p>
        <strong>내용: </strong>
        <br />
        <br />
        {book.contents}
      </p>
    </div>
    // <div className="book-detail">
    //   <h2>book details</h2>
    //   <p>thank you</p>
    // </div>
  );
}
