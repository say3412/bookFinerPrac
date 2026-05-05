import useBookContext from "../hooks/useBookContext";
import "./css/Header.css";

export default function Header() {
  const { books } = useBookContext();

  return (
    <>
      {books.length === 0 &&
        <header className="Header">
          <h1>🍓 Berry Book Club 📚</h1>
          <p>every books you want!</p>
        </header>
      }
    </>
  );
}
