import "./css/Header1.css";
import type { Book } from "../types/Book";

interface HeaderProps {
  books: Book[];
}

export default function Header({ books }: HeaderProps) {
  return (
    <>
      {!books || books.length === 0 && (
        <header className="Header">
          <h1>🍓 Berry Book Club 📚</h1>
          <p>every books you want!</p>
        </header>
      )}
    </>
  );
}
