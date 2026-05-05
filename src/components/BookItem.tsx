import useBookContext from "../hooks/useBookContext";
import type { Book } from "../types/Book";

interface BookProp {
  book: Book
}

export default function BookItem({book}: BookProp) {
  const {selectBook} = useBookContext();
  
  return (
    <div className="book-item" onClick={() => selectBook(book)}>
      <img
        src={book.thumbnail}
        alt={book.title}
      />
      <div className="book-info">
        <h3>{book.title}</h3>
        <p>{book.authors} | {book.publisher}</p>
      </div>
    </div>
    // <div className="book-item">
    //   <img
    //     src="https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791187142560.jpg"
    //     alt="책 제목"
    //   />
    //   <div className="book-info">
    //     <h3>title</h3>
    //     <p>authors | publisher</p>
    //   </div>
    // </div>
  );
}
