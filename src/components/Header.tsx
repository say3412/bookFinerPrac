import "./css/Header1.css";
import useBookContext from "../hooks/useBookContext";

export default function Header() {
  const {books} = useBookContext();

  if (!books) {
    throw new Error('No BookContext Provider.');
  }
  return (
    <>
      {books.length === 0 && (
        <header className="Header">
          <h1>🍓 Berry Book Club 📚</h1>
          <p>every books you want!</p>
        </header>
      )}
    </>
  );
}
